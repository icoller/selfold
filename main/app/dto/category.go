package dto

import (
	"selfx/domain/core/entity"
)

type CategoryTree struct {
	entity.Category
	Children []CategoryTree `json:"children"`
}
