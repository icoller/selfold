package mapper

import (
	"selfx/app/dto"
	"selfx/domain/core/aggregate"
	"selfx/domain/core/entity"
	pluginEntity "selfx/domain/support/entity"
	"selfx/domain/support/service"
)

func PluginItemsToPluginInfoList(items []*pluginEntity.Plugin) (res []dto.PluginList) {
	for _, item := range items {
		var runErr string
		if item.RunError != nil {
			runErr = item.RunError.Error()
		}
		res = append(res, dto.PluginList{
			PluginInfo:  *item.Info,
			RunTime:     item.RunTime.Unix(),
			RunError:    runErr,
			RunCount:    item.RunCount,
			RunDuration: item.RunDuration.Milliseconds(),
			NextRunTime: service.Plugin.NextRunTime(item.CronID).Unix(),
		})
	}
	return
}

func StoreToArticlePost(item *entity.Store) *aggregate.ArticlePost {
	return &aggregate.ArticlePost{
		Article: entity.Article{
			ArticleBase: entity.ArticleBase{
				Title:       item.Title,
				Slug:        item.Slug,
				CreateTime:  item.CreateTime,
				CategoryID:  item.CategoryID,
				Views:       item.Views,
				Thumbnail:   item.Thumbnail,
				Description: item.Description,
			},
			ArticleDetail: entity.ArticleDetail{
				Keywords: item.Keywords,
				Content:  item.Content,
				Extends:  item.Extends,
			},
		},
		Tags:         item.Tags,
		CategoryName: item.CategoryName,
	}
}
