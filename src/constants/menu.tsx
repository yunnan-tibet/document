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
      name: '较常用型',
      routes: [
        {
          name: 'Form',
          exact: true,
          path: '/frequently/form',
        },
        {
          name: 'Search',
          exact: true,
          path: '/frequently/search',
        },
        {
          name: 'SearchTable',
          exact: true,
          path: '/frequently/searchTable',
        },
        {
          name: 'ContentWrapper',
          exact: true,
          path: '/frequently/contentWrapper',
        },
      ],
    },
    {
      icon: <AppstoreOutlined />,
      name: '自适应型',
      routes: [
        {
          name: 'AutoSizeList',
          exact: true,
          path: '/auto/autoSizeList',
        },
        {
          name: 'ContainImage',
          exact: true,
          path: '/auto/containImage',
        },
        {
          name: 'ContainVideo',
          exact: true,
          path: '/auto/containVideo',
        },
        {
          name: 'ContainAttach',
          exact: true,
          path: '/auto/containAttach',
        },
        {
          name: 'FileSwiper',
          exact: true,
          path: '/auto/fileSwiper',
        },
      ],
    },
    {
      icon: <DashboardOutlined />,
      name: '图片型',
      routes: [
        {
          name: 'ContainImage',
          exact: true,
          path: '/img/containImage',
        },
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
      name: '其他',
      routes: [
        {
          name: 'Form',
          exact: true,
          path: '/other/textCopy',
        },
        {
          name: 'Permission',
          exact: true,
          path: '/other/permission',
        },
      ],
    },
  ],
};
