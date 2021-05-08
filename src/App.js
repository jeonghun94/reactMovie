import React from "react";
// import PropTypes from "prop-types";


// function Member({name, image, rank}) {
//   return (
//     <div>
//       <h3>I love {name} / {rank}</h3>
//       <img alt='load fail' src={image} />
//     </div>
//   );
// }

// const blackPink =[
//   {
//     id:1,
//     rank:2,
//     name:'로제',
//     image:'http://www.newscj.com/news/photo/202103/newscj_%EC%B2%9C%EC%A7%80%EC%9D%BC%EB%B3%B4_2021_3_21_184412_888183.jpg'
//   },
//   {
//     id:2,
//     rank:1,
//     name:'지수',
//     image:'https://image.fmkorea.com/files/attach/new/20200509/486616/33498427/2899343737/d5334a04b6bf2dff1bda599999e08959.jpg'
//   },
//   {
//     id:3,
//     rank:3,
//     name:'제니',
//     image:'https://dispatch.cdnser.be/cms-content/uploads/2020/10/11/93235d9c-e8b3-4ac5-9edd-0c63b2079a59.jpeg'
//   },
//   {
//     id:4,
//     rank:4,
//     name:'리사',
//     image:'https://image.news1.kr/system/photos/2020/10/26/4446138/article.jpg/dims/optimize'
//   }
// ];

// Member.propTypes ={
//   name:PropTypes.string.isRequired,
//   image:PropTypes.string.isRequired,
//   rank:PropTypes.number
// }


// function renderComponent(i) {
//   return <Member name={i.name} image={i.image}/> ;
// }

// const renderComponent = i => <Member name={i.name} image={i.image}/> ;

// function App() {
  // const f = [1,2,3,4];

  // f.map(c => {
  //   console.log(c);
  //   return 0;
  // })
  
  // return(
  //   <div>
  //     {blackPink.map(i =>
  //       // renderComponent
  //       <Member key={i.id} rank={i.rank} name={i.name} image={i.image}/> 
  //     )}
  //   </div>
  // );

// }



class App extends React.Component{

  constructor(props){
    super(props);
    console.log('hello');
  }

  state = {
    isLoading:true,
    movie:[],
  };

  // add = () =>{
  //   // console.log('add');
  //   this.setState({count:this.state.count +1})
  // }

  // minus = () =>{
  //   // console.log('minus');
  //   this.setState({count:this.state.count -1})
  // }

  componentDidMount(){
    console.log('didmount');

    setTimeout(() => {
      this.setState({isLoading:false});
    },3000);
  }
  
  // componentDidUpdate(){
  //   console.log('didupdate');
  // }

  // componentWillUnmount(){
  //   console.log('unmount');
  // }

  render(){
    console.log('hello2');
    const {isLoading} = this.state;
    return (
      <div>{isLoading ? 'Loading...' : 'We are ready'}
        
      </div>
    )
  }
}

export default App;
