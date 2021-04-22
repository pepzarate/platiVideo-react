 import '../assets/styles/components/Categories.scss'

 const Categories = (props) => (
    <div className="categories">
        <h3 className="categories__title">{props.category}</h3>
            {props.children}
    </div>
 )
 
 export default Categories