package mapper

import (
	"encoding/json"
	"selfx/app/web/dto"
	"selfx/domain/config"
	"selfx/domain/core/aggregate"
	"selfx/domain/core/entity"
	"selfx/domain/core/repo/context"
)

func MessageResult(err error) *dto.MessageResult {
	if err == nil {
		return &dto.MessageResult{Success: true}
	}
	return &dto.MessageResult{Message: err.Error()}
}

func MessageResultData(data any, err error) *dto.MessageResult {
	if err == nil {
		return &dto.MessageResult{Success: true, Data: data}
	}
	return &dto.MessageResult{Message: err.Error()}
}

func MessageFail(msg string) *dto.MessageResult {
	return &dto.MessageResult{Message: msg}
}

func MessageSuccess(msg string) *dto.MessageResult {
	return &dto.MessageResult{Success: true, Message: msg}
}

func BodyParser(body []byte, ptr any) error {
	return json.Unmarshal(body, ptr)
}

func BodyToContext(body []byte) (ctx context.Context, err error) {
	if len(body) == 0 {
		return
	}
	err = BodyParser(body, &ctx)
	ctx.FastOffset = config.Config.More.FastOffsetMinPage > 0 && ctx.Page > config.Config.More.FastOffsetMinPage // 加速分页查询
	if ctx.Limit == 0 {
		ctx.Limit = 20 // 限制调取数量
	}
	return
}

func BodyToWhere(body []byte) (res context.Where, err error) {
	if len(body) == 0 {
		return
	}
	err = BodyParser(body, &res)
	return
}

type curdModel interface {
	entity.Article | entity.Category | entity.Tag | entity.Link | aggregate.ArticlePost | entity.Store
}

func BodyToCurdModel[M curdModel](body []byte) (_ *M, err error) {
	var obj M
	err = BodyParser(body, &obj)
	return &obj, err
}

func BodyToStrSet(body []byte) (res []string, err error) {
	err = BodyParser(body, &res)
	return
}

func BodyToIntSet(body []byte) (res []int, err error) {
	err = BodyParser(body, &res)
	return
}
