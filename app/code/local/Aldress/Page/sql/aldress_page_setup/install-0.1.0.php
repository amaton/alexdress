<?php
/**
 * User: Ilya Voinov
 * Email: ilya.voinov@yahoo.com
 * Date: 12/17/13
 */ 
/* @var $installer Mage_Core_Model_Resource_Setup */
$installer = $this;

$installer->startSetup();

$cmsHomePage = Mage::getModel('cms/page')->load('home');
if(!$cmsHomePage->getPageId()) {
    $newBlock = Mage::getModel('cms/page')->setIdentifier('home');
}
$layoutUpdateXml = <<<XML
<reference name="content">
<block type="page/html_wrapper"  before="content" name="home.wrapper" >
    <action method="setElementTagName"><tag>div</tag></action>
    <action method="setElementClass"><class>std</class></action>
    <block type="aldress_page/html_homepage_banners" name="homepage.banner.rotator" template="page/html/homepage/main_banners.phtml">
        <action method="setBannerGroupId"><banner_group_id>home_banner</banner_group_id></action>
    </block>
    <block type="aldress_page/html_homepage_banners" name="categories.banner.rotator" template="page/html/homepage/categories_banners.phtml">
        <action method="setBannerGroupId"><banner_group_id>categories_banner_rotator</banner_group_id></action>
    </block>
    <block type="aldress_page/html_homepage_banners" name="styles.banner.rotator" template="page/html/homepage/styles_banners.phtml">
        <action method="setBannerGroupId"><banner_group_id>styles_banner_rotator</banner_group_id></action>
    </block>
</block>
</reference>
XML;

$cmsHomePage->setTitle('Home page')
    ->setContent('<div class="home-content smallContainer">Alex Dress Main Description And Meta Infarmation</div>')
    ->setRootTemplate('one_column')
    ->setLayoutUpdateXml($layoutUpdateXml)
    ->setStoreId(array(0))
    ->setActive(1);

$cmsHomePage->save();

$installer->endSetup();