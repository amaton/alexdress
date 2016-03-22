<?php
/**
 * User: Ilya Voinov
 * Email: ilya.voinov@yahoo.com
 * Date: 12/17/13
 */
class Aldress_Page_Block_Html_Homepage_Banners extends Mage_Core_Block_Template
{

    CONST BANNER_GROUP_DATA_CACHE_TAG = 'banner_group_data';

    public function getDataByGroupCode()
    {
        $currentStoreCode = Mage::app()->getStore()->getCode();
        $cacheKey = self::BANNER_GROUP_DATA_CACHE_TAG . '_' . $this->getBannerGroupId() . '_' . $currentStoreCode;
        $bannersGroupData = Mage::app()->getCache()->load($cacheKey);
        if(!empty($bannersGroupData)) {
            return unserialize(Mage::app()->getCache()->load($cacheKey));
        } else {
            $bannerGroupId = $this->getBannerGroupId() . '_' . $currentStoreCode;
            $bannersGroupData = Mage::getModel('banner/bannergroup')->getDataByGroupCode($bannerGroupId);
            if(empty($bannersGroupData['group_data']) || empty($bannersGroupData['banner_data'])) {
                $bannersGroupData = Mage::getModel('banner/bannergroup')->getDataByGroupCode($this->getBannerGroupId());
            }
            Mage::app()->getCache()->save(serialize($bannersGroupData), $cacheKey, array(self::BANNER_GROUP_DATA_CACHE_TAG));
        }
        return $bannersGroupData;
    }

    public function getBannerImageUrl($banner)
    {
        return Mage::getUrl(Mage_Core_Model_Store::URL_TYPE_MEDIA) . $banner->getFilename();
    }

}