package constant

import "time"

const (
	AppName          = "selfx"
	AppVersion       = "0.1.1"
	DefaultAdminPath = "/admin"
	ThemesDir        = "./themes"
	PublicDir        = "./public"
	LogDir           = "./runtime/log"
	CacheDir         = "./runtime/cache"
	UploadDir        = "./public/upload"
	UploadDomain     = "/upload/"
	LogoFilePath     = "/logo.png"
)

var (
	AppStartTime = time.Now()
)
