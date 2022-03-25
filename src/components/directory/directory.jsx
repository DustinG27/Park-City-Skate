import './directory.scss'; 
import CategoryItem from '../category-item/catergory-item';

const Directory = ({ categories }) => {
    return (
    <div className="categories-container">
    {/* mapping over category array for titles */}
     {categories.map((category) => (
     <CategoryItem key ={ CategoryItem.id } category={ category } />
     ))}
    
   </div>
    );
}

export default Directory;