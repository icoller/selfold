package service

import (
	"selfx/domain/core/aggregate"
	"selfx/domain/core/entity"
	"selfx/domain/core/event"
	"selfx/domain/core/repo"
	"selfx/domain/core/repo/context"
	"selfx/domain/core/utils"
	"selfx/infra/general/message"
	"strings"
	"time"

	"github.com/duke-git/lancet/v2/slice"
)

var Category = new(CategoryService)

type CategoryService struct {
	CreateBeforeEvents []event.CategoryCreateBefore
	CreateAfterEvents  []event.CategoryCreateAfter
	UpdateBeforeEvents []event.CategoryUpdateBefore
	UpdateAfterEvents  []event.CategoryUpdateAfter
	DeleteBeforeEvents []event.CategoryDeleteBefore
	DeleteAfterEvents  []event.CategoryDeleteAfter
	GetAfterEvents     []event.CategoryGetAfter
	ListAfterEvents    []event.CategoryListAfter
}

func (s *CategoryService) AddCreateBeforeEvents(ev ...event.CategoryCreateBefore) {
	s.CreateBeforeEvents = append(s.CreateBeforeEvents, ev...)
}
func (s *CategoryService) AddCreateAfterEvents(ev ...event.CategoryCreateAfter) {
	s.CreateAfterEvents = append(s.CreateAfterEvents, ev...)
}
func (s *CategoryService) AddUpdateBeforeEvents(ev ...event.CategoryUpdateBefore) {
	s.UpdateBeforeEvents = append(s.UpdateBeforeEvents, ev...)
}
func (s *CategoryService) AddUpdateAfterEvents(ev ...event.CategoryUpdateAfter) {
	s.UpdateAfterEvents = append(s.UpdateAfterEvents, ev...)
}
func (s *CategoryService) AddDeleteBeforeEvents(ev ...event.CategoryDeleteBefore) {
	s.DeleteBeforeEvents = append(s.DeleteBeforeEvents, ev...)
}
func (s *CategoryService) AddDeleteAfterEvents(ev ...event.CategoryDeleteAfter) {
	s.DeleteAfterEvents = append(s.DeleteAfterEvents, ev...)
}
func (s *CategoryService) AddGetAfterEvents(ev ...event.CategoryGetAfter) {
	s.GetAfterEvents = append(s.GetAfterEvents, ev...)
}
func (s *CategoryService) AddListAfterEvents(ev ...event.CategoryListAfter) {
	s.ListAfterEvents = append(s.ListAfterEvents, ev...)
}

func (s *CategoryService) listAfterEvents(list []entity.Category) {
	for _, e := range s.ListAfterEvents {
		e.CategoryListAfter(list)
	}
}

func (s *CategoryService) Save(item *entity.Category) (err error) {
	if item.ID == 0 {
		return s.Create(item)
	}
	return s.Update(item)
}

func (s *CategoryService) Create(item *entity.Category) (err error) {
	for _, e := range s.CreateBeforeEvents {
		if err = e.CategoryCreateBefore(item); err != nil {
			return
		}
	}
	if err = s.postCheck(item); err != nil {
		return
	}
	if item.CreateTime == 0 {
		item.CreateTime = time.Now().Unix()
	}
	if err = repo.Category.Create(item); err != nil {
		return
	}
	for _, e := range s.CreateAfterEvents {
		e.CategoryCreateAfter(item)
	}
	return
}

// CreateInBatches 批量创建
func (s *CategoryService) CreateInBatches(items []entity.Category, batchSize int) (err error) {
	for k := range items {
		for _, e := range s.CreateBeforeEvents {
			if err = e.CategoryCreateBefore(&items[k]); err != nil {
				return
			}
		}
		if err = s.postCheck(&items[k]); err != nil {
			return
		}
		if items[k].CreateTime == 0 {
			items[k].CreateTime = time.Now().Unix()
		}
	}
	if err = repo.Category.CreateInBatches(items, batchSize); err != nil {
		return
	}
	for _, item := range items {
		for _, e := range s.CreateAfterEvents {
			e.CategoryCreateAfter(&item)
		}
	}
	return
}

func (s *CategoryService) Update(item *entity.Category) (err error) {
	if item.ID == 0 {
		return message.ErrIdRequired
	}
	for _, e := range s.UpdateBeforeEvents {
		if err = e.CategoryUpdateBefore(item); err != nil {
			return
		}
	}
	if err = s.postCheck(item); err != nil {
		return
	}
	if err = repo.Category.Update(item); err != nil {
		return
	}
	for _, e := range s.UpdateAfterEvents {
		e.CategoryUpdateAfter(item)
	}
	return
}

func (s *CategoryService) postCheck(item *entity.Category) error {
	if item.Slug == "" {
		return message.ErrSlugRequired
	}
	if item.Name == "" {
		return message.ErrNameRequired
	}
	if strings.HasPrefix(item.Slug, " ") {
		return message.ErrSlugStartSpaceRequired
	}
	if strings.HasSuffix(item.Slug, " ") {
		return message.ErrSlugEndSpaceRequired
	}
	return nil
}

func (s *CategoryService) Delete(id int) (err error) {
	if id == 0 {
		return message.ErrIdRequired
	}
	for _, e := range s.DeleteBeforeEvents {
		if err = e.CategoryDeleteBefore(id); err != nil {
			return
		}
	}
	if err = repo.Category.Delete(id); err != nil {
		return
	}
	for _, e := range s.DeleteAfterEvents {
		e.CategoryDeleteAfter(id)
	}
	return
}

func (s *CategoryService) BatchDelete(ids []int) (err error) {
	for _, id := range ids {
		if err = s.Delete(id); err != nil {
			return
		}
	}
	return
}

func (s *CategoryService) Get(id int) (res *entity.Category, err error) {
	if id == 0 {
		return nil, message.ErrIdRequired
	}
	if res, err = repo.Category.Get(id); err != nil {
		return
	}
	if res.ID == 0 {
		return nil, message.ErrRecordNotFound
	}
	for _, e := range s.GetAfterEvents {
		e.CategoryGetAfter(res)
	}
	return
}

// GetOrCreate 不存在则创建
func (s *CategoryService) GetOrCreate(name string) (*entity.Category, error) {
	res, err := s.GetByName(name)
	if err == nil && res.ID > 0 {
		return res, err
	}
	var createRes = entity.Category{Name: name}
	err = s.Create(&createRes)
	return &createRes, err
}

func (s *CategoryService) GetByName(name string) (res *entity.Category, err error) {
	if name == "" {
		return nil, message.ErrNameRequired
	}
	if res, err = repo.Category.GetByName(name); err != nil {
		return
	}
	if res.ID == 0 {
		return nil, message.ErrRecordNotFound
	}
	for _, e := range s.GetAfterEvents {
		e.CategoryGetAfter(res)
	}
	return
}

func (s *CategoryService) GetBySlug(slug string) (res *entity.Category, err error) {
	if slug == "" {
		return nil, message.ErrSlugRequired
	}
	if res, err = repo.Category.GetBySlug(slug); err != nil {
		return
	}
	if res.ID == 0 {
		return nil, message.ErrRecordNotFound
	}
	for _, e := range s.GetAfterEvents {
		e.CategoryGetAfter(res)
	}
	return
}

func (s *CategoryService) ExistsSlug(slug string) (bool, error) {
	if slug == "" {
		return false, message.ErrSlugRequired
	}
	id, err := repo.Category.GetIdBySlug(slug)
	return id > 0, err
}

func (s *CategoryService) ExistsName(name string) (bool, error) {
	if name == "" {
		return false, message.ErrNameRequired
	}
	id, err := repo.Category.GetIdByName(name)
	return id > 0, err
}

func (s *CategoryService) CountByWhere(where *context.Where) (res int64, err error) {
	return repo.Category.CountByWhere(where)
}

// CountTotal 统计总数
func (s *CategoryService) CountTotal() (int64, error) {
	return repo.Category.CountTotal()
}

//////////////////////////////////////////
//////////////////////////////////////////

func (s *CategoryService) List(ctx *context.Context) (res []entity.Category, err error) {
	res, err = repo.Category.List(ctx)
	s.listAfterEvents(res)
	return
}

// ListByIds 通过ids获取列表
func (s *CategoryService) ListByIds(ctx *context.Context, ids []int) (res []entity.Category, err error) {
	res, err = repo.Category.ListByIds(ctx, ids)
	s.listAfterEvents(res)
	return
}

// ListByParentID 通过parentID 获取列表
func (s *CategoryService) ListByParentID(ctx *context.Context, parentID int) (res []entity.Category, err error) {
	return s.ListByParentIds(ctx, []int{parentID})
}

// ListByParentIds 通过parentIds 获取列表
func (s *CategoryService) ListByParentIds(ctx *context.Context, ids []int) (res []entity.Category, err error) {
	res, err = repo.Category.ListByParentIds(ctx, ids)
	s.listAfterEvents(res)
	return
}

// ListAfterCreateTime 根据创建时间调用列表
func (s *CategoryService) ListAfterCreateTime(ctx *context.Context, t int64) (res []entity.Category, err error) {
	res, err = repo.Category.ListAfterCreateTime(ctx, t)
	s.listAfterEvents(res)
	return
}

// PseudorandomList 伪随机列表
func (s *CategoryService) PseudorandomList(ctx *context.Context) (res []entity.Category, err error) {
	maxID, err := repo.Category.MaxID()
	if err != nil {
		return
	}
	return s.ListByIds(ctx, pseudorandomIds(maxID, ctx.Limit))
}

// GetWithAncestors 获取分类和其祖先
func (s *CategoryService) GetWithAncestors(ctx *context.Context, id int) (_ []entity.Category, err error) {
	if id <= 0 {
		return
	}
	all, err := s.List(ctx)
	return utils.FindCategoryWithAncestors(id, all), err
}

// GetWithParent 获取分类和其夫分类
func (s *CategoryService) GetWithParent(id int) (res []entity.Category, err error) {
	if id <= 0 {
		return
	}
	res, err = repo.Category.GetWithParent(id)
	s.listAfterEvents(res)
	return
}

// GetWithAncestorsReverse 获取分类和其祖先(祖先在前)
func (s *CategoryService) GetWithAncestorsReverse(ctx *context.Context, id int) (res []entity.Category, err error) {
	res, err = s.GetWithAncestors(ctx, id)
	slice.Reverse(res)
	return
}

// ListDescendants 所有后代列表树
func (s *CategoryService) ListDescendants(ctx *context.Context, rootID int) (res []aggregate.CategoryTree, err error) {
	all, err := s.List(ctx)
	return utils.MakeCategoryTree(utils.CategoryEntityListToCategoryTreeList(all), rootID), err
}

// ListChildren 子分类列表
func (s *CategoryService) ListChildren(ctx *context.Context, parentID int) (res []entity.Category, err error) {
	return s.ListByParentID(ctx, parentID)
}

// ListRootWithChildren 根类目列表并包含子类目
func (s *CategoryService) ListRootWithChildren(ctx *context.Context) (res []aggregate.CategoryTree, err error) {
	list, err := s.ListByParentID(ctx, 0)
	if err != nil || len(list) == 0 {
		return
	}
	return s.ListByCategoriesWithChildren(ctx, list)
}

// ListByIdsWithChildren 根据ids获取列表并包含子分类
func (s *CategoryService) ListByIdsWithChildren(ctx *context.Context, ids []int) (res []aggregate.CategoryTree, err error) {
	if len(ids) == 0 {
		return
	}
	list, err := s.ListByIds(ctx, ids)
	if err != nil || len(list) == 0 {
		return
	}
	return s.ListByCategoriesWithChildren(ctx, list)
}

// ListByCategoriesWithChildren 给分类列表调用子分类
func (s *CategoryService) ListByCategoriesWithChildren(ctx *context.Context, list []entity.Category) (res []aggregate.CategoryTree, err error) {
	res = utils.CategoryEntityListToCategoryTreeList(list)
	var parentIds []int
	for _, v := range list {
		parentIds = append(parentIds, v.ID)
	}
	children, err := s.ListByParentIds(ctx, parentIds)
	if err != nil {
		return
	}
	childrenTree := utils.CategoryEntityListToCategoryTreeList(children)
	for k, item := range list {
		res[k].Children = utils.MakeCategoryTree(childrenTree, item.ID)
	}
	return
}

// BatchSetParentCategory 批量设置父分类
func (s *CategoryService) BatchSetParentCategory(parentID int, ids []int) error {
	return repo.Category.BatchSetParentCategory(parentID, ids)
}
