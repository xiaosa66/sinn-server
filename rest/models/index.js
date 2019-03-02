import CommentModel from './article/comment.model';
import ArticleModel from './article/article.model';
import CategoryModel from './article/category.model';
import TopCategoryModel from './article/topcategory.model';
import UserModel from './user/user.model';
import AdminUserModel from './user/admin.model';
import indexSectionModel from './indexSection.model';          // todo 为什么要在这里引入在导出???

export {
   CommentModel,
   ArticleModel,
   CategoryModel,
   TopCategoryModel,
   UserModel,
   AdminUserModel,
   indexSectionModel
}