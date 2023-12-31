package controller

import (
	"selfx/app/service"
	"selfx/app/web/mapper"
	"selfx/infra/support/log"
	"strconv"

	"github.com/gofiber/fiber/v2"
)

func LogInit(ctx *fiber.Ctx) error {
	log.Init()
	return ctx.JSON(mapper.MessageResult(nil))
}

func LogRead(ctx *fiber.Ctx) error {
	var page, _ = strconv.Atoi(ctx.Query("page"))
	var limit, _ = strconv.Atoi(ctx.Query("limit"))
	if page == 0 {
		page = 1
	}
	if limit == 0 {
		limit = 100
	}
	return ctx.JSON(mapper.MessageResultData(service.LogRead(ctx.Params("id"), page, limit)))
}
