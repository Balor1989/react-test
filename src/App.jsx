import Component from "./components/Component"
const images = {
  url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'White and Black Long Fur Cat',
  title: 'Title',
  price: 1000,
  author: {
    tag: 'Author',
    url:'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  quantity:10
  }



export default function App() {
    return <div>
        <Component
  url={images.url}
  title={images.title}
  name={images.author.tag}
        />
    </div>
}