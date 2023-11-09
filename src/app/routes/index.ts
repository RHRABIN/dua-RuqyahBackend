import express from 'express';
import { CategoryRoutes } from '../modules/category/category.routes';
import { SubCategoryRoutes } from '../modules/subcategory/subcategory.routes';
import { DuaRoutes } from '../modules/dua/dua.routes';


const router = express.Router();
const moduleRoutes = [
  //... routes
  {
    path: '/category',
    route: CategoryRoutes,
  },
  {
    path: '/subcategory',
    route: SubCategoryRoutes,
  },
  {
    path: '/dua',
    route: DuaRoutes,
  },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
