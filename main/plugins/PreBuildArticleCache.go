/*
 * @Author: coller
 * @Date: 2023-12-20 21:46:14
 * @LastEditors: coller
 * @LastEditTime: 2023-12-24 16:58:46
 * @Desc:
 */
package plugins

import (
	"fmt"
	appService "selfx/app/service"
	"selfx/domain/config"
	"selfx/domain/core/entity"
	"selfx/domain/core/service"
	pluginEntity "selfx/domain/support/entity"
	"selfx/infra/support/cache"

	"go.uber.org/zap"
)

type PreBuildArticleCache struct {
	EnableOnCreate bool `json:"enable_on_create"` // 创建时执行
	EnableOnUpdate bool `json:"enable_on_update"` // 更新时执行

	ctx *pluginEntity.Plugin
}

func NewPreBuildArticleCache() *PreBuildArticleCache {
	return &PreBuildArticleCache{}
}

func (d *PreBuildArticleCache) Info() *pluginEntity.PluginInfo {
	return &pluginEntity.PluginInfo{
		ID:    "PreBuildArticleCache",
		About: "pre build article cache when created or updated",
	}
}

func (d *PreBuildArticleCache) Load(ctx *pluginEntity.Plugin) error {
	d.ctx = ctx
	service.Article.AddCreateAfterEvents(d)
	service.Article.AddUpdateAfterEvents(d)
	return nil
}

func (d *PreBuildArticleCache) ArticleCreateAfter(item *entity.Article) {
	if d.EnableOnCreate {
		d.build(item, "create")
	}
}

func (d *PreBuildArticleCache) ArticleUpdateAfter(item *entity.Article) {
	if d.EnableOnUpdate {
		d.build(item, "update")
	}
}

func (d *PreBuildArticleCache) build(item *entity.Article, action string) {
	if !config.Config.Cache.Enable {
		d.ctx.Log.Warn("cache config is disabled")
		return
	}

	option := config.Config.Cache.GetOption("article")
	if option == nil || !option.Enable {
		d.ctx.Log.Warn("article cache config is disabled")
		return
	}

	bytes, err := appService.Render.Article(item)
	if err != nil {
		d.ctx.Log.Error("render error", zap.Error(err), zap.Int("id", item.ID))
		return
	}

	err = cache.Set("article", item.URL(), bytes, option.TTL.Duration())
	if err != nil {
		d.ctx.Log.Error("set cache error", zap.Error(err), zap.Int("id", item.ID))
		return
	}

	d.ctx.Log.Info(fmt.Sprintf("id:%d build success!", item.ID),
		zap.String("action", action),
		zap.String("title", item.Title),
		zap.String("url", item.FullURL()))
}

func (d *PreBuildArticleCache) Run(ctx *pluginEntity.Plugin) (err error) {
	return nil
}
