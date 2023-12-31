package service

import (
	"selfx/app/dto"
	"selfx/app/mapper"
	"selfx/domain/support/entity"
	"selfx/domain/support/factory"
	"selfx/domain/support/service"
	"selfx/infra/support/log"
)

func PluginInit(items ...entity.PluginEntry) {
	for _, item := range items {
		if err := service.Plugin.Init(item); err != nil {
			log.Error("plugin loaded failed", log.Any("info", item.Info()), log.Err(err))
		} else {
			log.Debug("plugin loaded successfully", log.Any("info", item.Info()))
		}
	}
}

func PluginList() []dto.PluginList {
	return mapper.PluginItemsToPluginInfoList(service.Plugin.Items)
}

func PluginLogList(id string, page, limit int) (any, error) {
	filePath := factory.GetPluginLogFilePath(id)
	return logRead(filePath, page, limit)
}
