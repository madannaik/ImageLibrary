import React, {useState} from 'react';
import {SearchRounded} from '@material-ui/icons';

import Button from '@material-ui/core/Button';
import {Card} from 'react-bootstrap';


function Search() {
  const [input, setInput] = useState('hello');
  const [request, setRequest] = useState(false);
  const [queryData, setQueryData] = useState([]);
  // const [isData, setIsData] = useState(false);

  const changeInput = event => {
    let value = event.target.value;
    setInput(value);
  };
  const takeTheContent = () => {
    console.log(input);
  };
  const fetchInput = () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    };
    fetch(
        `https://images-api.nasa.gov/search?q=${input}`,
        requestOptions)
        .then(response => response.json())
        .then(data => {
          setQueryData(data.collection.items);
          console.log(data);
          setRequest(true);
        });
  };

  return <div>
    <h1>Hello this is search page</h1>
    <div>
      <input name="search" placeholder="Enter search" onChange={changeInput}/>
      <SearchRounded onClick={fetchInput}/>
      <div className="d-flex flex-row flex-wrap justify-content-around p-1">
        {request?queryData.map(data =>{

          return (<Card style={{ width: '23rem',margin:"1rem" }}>
                <Card.Img variant="top" src={data.links[0].href} className="h-50 "  />
                <Card.Body>
                  <Card.Title>{data.data[0].title}</Card.Title>
                  <Card.Text>
                    {String(data.data[0].description).substring(1,100)}...
                  </Card.Text>
                  <Button variant="primary">More related data</Button>
                </Card.Body>
              </Card>
              )}):<p>hello</p> }
      </div>
    </div>
  </div>;
}

export default Search;


// <div key={data.data[0].nasa_id}>
//   <Card className={classes.root} >
//     <CardActionArea>
//       <CardMedia
//           className={classes.media}
//           image="https://images-assets.nasa.gov/image/PIA07905/PIA07905~thumb.jpg"
//           title="Contemplative Reptile"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="h2">
//           {data.data[0].title}
//         </Typography>
//         <Typography variant="body2" color="textSecondary" component="p">
//           {data.data[0].description}
//         </Typography>
//       </CardContent>
//     </CardActionArea>
//     <CardActions>
//       <Button size="small" color="primary">
//         Share
//       </Button>
//       <Button size="small" color="primary">
//         Learn More
//       </Button>
//     </CardActions>
//   </Card>
// </div>