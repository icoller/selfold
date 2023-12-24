package router

import (
	"path/filepath"
	"selfx/app/web/controller"
	"selfx/app/web/middleware"
	"selfx/domain/config"
	"selfx/infra/general/constant"
	"selfx/infra/support/template"

	"github.com/gofiber/fiber/v2"
)

func (r *Router) RegisterHome(route fiber.Router) {

	route.Get("/robots.txt", controller.AssetsRobotsTxt)
	route.Get("/ads.txt", controller.AssetsAdsTxt)
	route.Get("/favicon.ico", controller.FaviconIco)
	route.Get(constant.LogoFilePath, controller.Logo)

	// sitemap
	sitemap := route.Group(config.Config.Router.GetSitemapPath())
	sitemap.Get("/article.xml", middleware.Cache, controller.Sitemap.ArticleXML).Name("sitemap")
	sitemap.Get("/article.txt", middleware.Cache, controller.Sitemap.ArticleTXT).Name("sitemap")
	sitemap.Get("/category.xml", middleware.Cache, controller.Sitemap.CategoryXML).Name("sitemap")
	sitemap.Get("/category.txt", middleware.Cache, controller.Sitemap.CategoryTXT).Name("sitemap")
	sitemap.Get("/tag.xml", middleware.Cache, controller.Sitemap.TagXML).Name("sitemap")
	sitemap.Get("/tag.txt", middleware.Cache, controller.Sitemap.TagTXT).Name("sitemap")

	// home
	route.Get("/", middleware.Cache, middleware.MinifyCode, controller.HomeIndex).Name("home")

	// static路由应当放到  template page路由前面
	// 否则不能正确响应文件的content-Type
	// template public
	if currentThemePath, err := template.CurrentThemePath(); err == nil {
		route.Static("/", filepath.Join(currentThemePath, "public"))
	}
	// public
	route.Static("/", constant.PublicDir)

	// template page
	route.Get("/*", middleware.Cache, middleware.MinifyCode, controller.TemplatePage).Name("page")

	// category
	route.Get(config.Config.Router.GetCategoryPageRule(), middleware.Cache, middleware.MinifyCode, controller.HomeCategory).Name("category")
	route.Get(config.Config.Router.GetCategoryRule(), middleware.Cache, middleware.MinifyCode, controller.HomeCategory).Name("category")

	// tag
	route.Get(config.Config.Router.GetTagPageRule(), middleware.Cache, middleware.MinifyCode, controller.HomeTag).Name("tag")
	route.Get(config.Config.Router.GetTagRule(), middleware.Cache, middleware.MinifyCode, controller.HomeTag).Name("tag")

	// article
	articleRule := config.Config.Router.GetArticleRule()
	route.Get(articleRule, middleware.Cache, middleware.MinifyCode, controller.HomeArticle).Name("article")
	route.Put(articleRule, controller.HomeArticleViews)

	// not found
	route.All("*", middleware.MinifyCode, controller.HomeNotFound)
}
