import Product from './Product';
import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
import pic4 from '../images/pic4.jpg';
import pic5 from '../images/pic5.jpg';
import pic6 from '../images/pic6.jpg';
import pic7 from '../images/pic7.jpg';
import pic8 from '../images/pic8.jpg';



let products = [
    {
        image: pic1,
        name: "Sabbir",
        id: 1802163,
        des: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        image: pic2,
        name: "Hasibul",
        id: 1802107,
        des: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
        image: pic3,
        name: "Mosh",
        id: 1802160,
        des: "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
        image: pic4,
        name: "Sujon",
        id: 1802112,
        des: "the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
        image: pic5,
        name: "Hasibul",
        id: 1802107,
        des: "he readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
        image: pic6,
        name: "Hasibul",
        id: 1802107,
        des: ", sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
        image: pic7,
        name: "Hasibul",
        id: 1802107,
        des: ", sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
        image: pic8,
        name: "Hasibul",
        id: 1802107,
        des: ", sometimes by accident, sometimes on purpose (injected humour and the like)."
    }
]

const Products = () => {
    return (
        <div>
            <div class = "heading">Gallery</div>
            <Product products = {products}></Product>
        </div>
    );
};

export default Products;