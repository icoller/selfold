package service

import (
	"selfx/domain/core/entity"
	"selfx/domain/core/repo"
	"selfx/domain/core/repo/context"
	"selfx/infra/general/message"
	"strings"
	"time"
)

var Store = new(StoreService)

type StoreService struct {
}

func (s *StoreService) Create(item *entity.Store) (err error) {
	if err = s.postCheck(item); err != nil {
		return
	}
	if item.StoreCreateTime == 0 {
		item.StoreCreateTime = time.Now().Unix()
	}
	return repo.Store.Create(item)
}

func (s *StoreService) Update(item *entity.Store) (err error) {
	if item.ID == 0 {
		return message.ErrIdRequired
	}
	if err = s.postCheck(item); err != nil {
		return
	}
	return repo.Store.Update(item)
}

func (s *StoreService) postCheck(item *entity.Store) error {
	if item.Title == "" {
		return message.ErrTitleRequired
	}
	if item.Content == "" {
		return message.ErrContentRequired
	}
	if strings.HasPrefix(item.Slug, " ") {
		return message.ErrSlugStartSpaceRequired
	}
	if strings.HasSuffix(item.Slug, " ") {
		return message.ErrSlugEndSpaceRequired
	}
	return nil
}

func (s *StoreService) Delete(id int) (err error) {
	if id == 0 {
		return message.ErrIdRequired
	}
	return repo.Store.Delete(id)
}

func (s *StoreService) BatchDelete(ids []int) (err error) {
	for _, id := range ids {
		if err = s.Delete(id); err != nil {
			return
		}
	}
	return
}

func (s *StoreService) Get(id int) (res *entity.Store, err error) {
	if id == 0 {
		return nil, message.ErrIdRequired
	}
	if res, err = repo.Store.Get(id); err != nil {
		return
	}
	if res.ID == 0 {
		return nil, message.ErrRecordNotFound
	}
	return
}

func (s *StoreService) CountByWhere(where *context.Where) (res int64, err error) {
	return repo.Store.CountByWhere(where)
}

// CountTotal 统计文章总数
func (s *StoreService) CountTotal() (int64, error) {
	return repo.Store.CountTotal()
}

// CountToday 统计今日添加数量
func (s *StoreService) CountToday() (int64, error) {
	return repo.Store.CountToday()
}

// CountYesterday 统计昨日添加数量
func (s *StoreService) CountYesterday() (int64, error) {
	return repo.Store.CountYesterday()
}

func (s *StoreService) List(ctx *context.Context) (res []entity.Store, err error) {
	res, err = repo.Store.List(ctx)
	return
}

func (s *StoreService) ListByCategoryID(ctx *context.Context, id int) (res []entity.Store, err error) {
	return s.ListByCategoryIds(ctx, []int{id})
}

// ListByCategoryIds 通过分类ID调用文章列表
func (s *StoreService) ListByCategoryIds(ctx *context.Context, ids []int) (res []entity.Store, err error) {
	if len(ids) == 0 {
		return
	}
	res, err = repo.Store.ListByCategoryIds(ctx, ids)
	return
}
