package dto

// UserListSearchMapping - define search query keys in user list page
var MenuListSearchMapping = map[string]string{
	"d": "domain_id",
}

// MenuCreateDto - dto for menu's creation
type MenuCreateDto struct {
	Name     string `form:"name" json:"name" binding:"required"`
	ParentId int    `form:"parent_id,default=0" json:"parent_id" binding:"gte=0"`
	DomainId int    `form:"domain_id" json:"domain_id" binding:"required,gte=1"`
	Url      string `form:"url" json:"url"`
	Perms    string `form:"perms" json:"perms"`
	MenuType int    `form:"menu_type,default=1" json:"menu_type"`
	Icon     string `form:"icon" json:"icon"`
	OrderNum int    `form:"order_num,default=1" json:"order_num"`
}

// MenuEditDto - dto for menu's modification
type MenuEditDto struct {
	Id       int    `uri:"id" json:"id" binding:"required,gte=1"`
	Name     string `form:"name" json:"name" binding:"required"`
	ParentId int    `form:"parent_id,default=0" json:"parent_id" binding:"gte=0"`
	DomainId int    `form:"domain_id" json:"domain_id" binding:"required,gte=1"`
	Url      string `form:"url" json:"url"`
	Perms    string `form:"perms" json:"perms"`
	MenuType int    `form:"menu_type,default=0" json:"menu_type"`
	Icon     string `form:"icon" json:"icon"`
	OrderNum int    `form:"order_num,default=1" json:"order_num"`
}
