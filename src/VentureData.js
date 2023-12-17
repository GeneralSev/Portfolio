
import { cartography_layout } from './components/ventures/cartography';
import { aurecon_layout } from './components/ventures/aurecon';
import { twine_layout } from './components/ventures/twine';

const ventures_data = [
    {
      "id": "personal_website",
      "title": "Personal Website",
      "date": "2023-12-07",
      "coverImage": "N/A",
      "type": "project",
      "page_layout": "N/A"
    },
    {
      "id": "veloways_and_dynamo",
      "title": "Veloways and Dynamo",
      "date": "2020-07-21",
      "coverImage": "images/thumbnails/veloway.jpg",
      "type": "project",
      "page_layout": aurecon_layout
    },
    {
      "id": "cartography",
      "title": "Cartography",
      "date": "2017-09-30",
      "coverImage": "images/thumbnails/Tor Kalva.png",
      "type": "hobby",
      "page_layout": cartography_layout
    },
    {
      "id": "twine",
      "title": "Twine Adventure",
      "date": "2016-02-12",
      "coverImage": "images/thumbnails/twine_layout.png",
      "type": "hobby",
      "page_layout": twine_layout
    },
    {
      "id": "master_thesis",
      "title": "Master Thesis",
      "date": "20XX-XX-XX",
      "coverImage": "N/A",
      "type": "project",
      "page_layout": "N/A"
    }
  ];
  
  export default ventures_data;

  