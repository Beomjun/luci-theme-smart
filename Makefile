# This program is free software; you can redistribute it and/or
# modify it under the terms of the GNU General Public License
# as published by the Free Software Foundation; either version 3
# of the License, or (at your option) any later version.

include $(TOPDIR)/rules.mk

PKG_NAME:=luci-theme-smart
PKG_VERSION:=0.1.1
PKG_RELEASE:=20260101

PKG_MAINTAINER:=Beomjun Kang <kals323@gmail.com>
PKG_LICENSE:=GPL-3.0-or-later
PKG_LICENSE_FILES:=LICENSE

LUCI_TITLE:=Smart Theme
LUCI_DEPENDS:=+luci-base +luci-theme-bootstrap
LUCI_PKGARCH:=all

include $(TOPDIR)/feeds/luci/luci.mk

define Package/luci-theme-smart/install
	$(call LuCI/Install)

	$(INSTALL_DIR) $(1)/usr/share/ucode/luci/template/themes/smart
	$(INSTALL_DATA) ./ucode/template/themes/smart/header.ut $(1)/usr/share/ucode/luci/template/themes/smart/header.ut
	$(INSTALL_DATA) ./ucode/template/themes/smart/footer.ut $(1)/usr/share/ucode/luci/template/themes/smart/footer.ut

	$(INSTALL_DIR) $(1)/www/luci-static/smart
	echo '$(PKG_VERSION)-$(PKG_RELEASE)' > $(1)/www/luci-static/smart/version.txt
endef

# call BuildPackage - OpenWrt buildroot signature
