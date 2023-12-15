import { Route } from '@ant-design/pro-layout/lib/typings';
import { AppstoreOutlined, DashboardOutlined } from '@ant-design/icons';
import React from 'react';

export const PERMISSIONS = {
  TEMPLATE_ONE: 'template_one',
  TEMPLATE_TWO: 'template_two',
  somePermissionAllow: (
    allowPermissions: string[] = [],
    ownerPermissions: string[] = [],
  ) =>
    !allowPermissions.length ||
    ownerPermissions.some((perm) => allowPermissions.includes(perm)),
};

export const menu: Route = {
  routes: [
    {
      icon: <DashboardOutlined />,
      name: '表单',
      routes: [
        {
          name: 'Form',
          exact: true,
          path: '/form/form',
        },
        {
          name: 'Search',
          exact: true,
          path: '/form/search',
        },
        {
          name: 'TableHeaderConfig',
          exact: true,
          path: '/form/tableHeaderConfig',
        },
        // {
        //   name: 'SearchTable',
        //   exact: true,
        //   path: '/frequently/searchTable',
        // },
      ],
    },
    {
      icon: <AppstoreOutlined />,
      name: '自适应型',
      routes: [
        {
          name: 'AutoSizeList',
          exact: true,
          path: '/adaptive/autoSizeList',
        },
        {
          name: 'StickyTabs',
          exact: true,
          path: '/adaptive/stickyTabs',
        },
        {
          name: 'AutoFillTable',
          exact: true,
          path: '/adaptive/autoFillTable',
        },
        {
          name: 'FlexibleTable',
          exact: true,
          path: '/adaptive/flexibleTable',
        },
        {
          name: 'ContainImage',
          exact: true,
          path: '/adaptive/containImage',
        },
        {
          name: 'ContainVideo',
          exact: true,
          path: '/adaptive/containVideo',
        },
        // {
        //   name: 'ContainAttach',
        //   exact: true,
        //   path: '/adaptive/containAttach',
        // },
        // {
        //   name: 'FileSwiper',
        //   exact: true,
        //   path: '/adaptive/fileSwiper',
        // },
      ],
    },
    {
      icon: <DashboardOutlined />,
      name: '图片型',
      routes: [
        {
          name: 'CropPicModal',
          exact: true,
          path: '/img/cropPicModal',
        },
        {
          name: 'PictrueJigsaw',
          exact: true,
          path: '/img/pictrueJigsaw',
        },
      ],
    },
    {
      icon: <DashboardOutlined />,
      name: '工具',
      routes: [
        {
          name: 'Cron',
          exact: true,
          path: '/tools/cron',
        },
      ],
    },
    {
      icon: <DashboardOutlined />,
      name: 'UI',
      routes: [
        {
          name: 'ContentWrapper',
          exact: true,
          path: '/ui/contentWrapper',
        },
      ],
    },
    {
      icon: <DashboardOutlined />,
      name: '业务',
      routes: [
        {
          name: 'TrendAnalysis',
          exact: true,
          path: '/biz/trendAnalysis',
        },
      ],
    },
  ],
};
