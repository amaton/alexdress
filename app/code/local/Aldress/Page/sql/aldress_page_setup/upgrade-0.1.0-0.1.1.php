<?php
/**
 * User: Ilya Voinov
 * Email: ilya.voinov@yahoo.com
 * Date: 12/17/13
 */

$installer = $this;

$installer->startSetup();

$installer->run("INSERT INTO {$this->getTable('uni_bannergroup')} (`group_name`, `group_code`, `banner_width`, `banner_height`, `animation_type`, `banner_effects`, `pre_banner_effects`, `banner_ids`, `show_title`, `show_content`, `link_target`, `status`, `created_time`, `update_time`) VALUES
('Categories Banners', 'categories_banner_rotator', 280, 149, 0, '', 'Square Transition Banner', '1,2,3,4', 0, 0, 0, 1, '2011-03-16 06:25:57', '2011-03-16 06:25:57'),
('Styles Banners', 'styles_banner_rotator', 280, 392, 0, '', 'Square Transition Banner', '1,2', 0, 0, 0, 1, '2011-03-16 07:11:12', '2011-03-16 07:11:12');
");
$installer->endSetup();
