import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';
declare var jquery: any; declare var $: any;
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  business_articles: any;
  entertainment_articles: any;
  general_articles: any;
  game_articles: any;
  music_articles: any;
  science_articles: any;
  sport_articles: any;
  tech_articles: any;
  // For Loading flag
  IsLoadBusinessFinished = false;
  IsLoadEntertainmentFinished = false;
  IsLoadGeneralFinished = false;
  IsLoadGameFinished = false;
  IsLoadMusicFinished = false;
  IsLoadPoliticsFinished = false;
  IsLoadScienceFinished = false;
  IsLoadSportFinished = false;
  IsLoadTechnologyFinished = false;

  business_sources = [
    {
      'SourceName': 'Bloomberg',
      'SourceCode': 'bloomberg',
      'SourceType': 'business',
      'SourceImageURL': 'https://assets.bwbx.io/business/public/images/favicons/apple-touch-icon-120x120-ef3226f2bd.png',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'Business Insider',
      'SourceCode': 'business-insider',
      'SourceType': 'business',
      'SourceImageURL': 'http://www.businessinsider.com/apple-touch-icon-precomposed.png',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'Business Insider (UK)',
      'SourceCode': 'business-insider-uk',
      'SourceType': 'business',
      'SourceImageURL': 'http://www.businessinsider.com/apple-touch-icon-precomposed.png',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'CNBC',
      'SourceCode': 'cnbc',
      'SourceType': 'business',
      'SourceImageURL': 'https://icons.better-idea.org/lettericons/C-120-fab715.png',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'Financial Times',
      'SourceCode': 'financial-times',
      'SourceType': 'business',
      'SourceImageURL': 'https://www.ft.com/__assets/creatives/brand-ft/icons/v2/apple-touch-icon-180x180.png',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'Fortune',
      'SourceCode': 'fortune',
      'SourceType': 'business',
      'SourceImageURL': 'http://1.gravatar.com/blavatar/dab01945b542bffb69b4f700d7a35f8f?s=114',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'The Economist',
      'SourceCode': 'the-economist',
      'SourceType': 'business',
      'SourceImageURL': 'https://icons.better-idea.org/lettericons/E-120-e3120b.png',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'The Wall Street Journal',
      'SourceCode': 'the-wall-street-journal',
      'SourceType': 'business',
      'SourceImageURL': 'https://www.wsj.com/apple-touch-icon-precomposed.png',
      'SourceFrom': 'News.io'
    }
  ];
  entertainment_sources = [
    {
      'SourceName': 'Buzzfeed',
      'SourceCode': 'buzzfeed',
      'SourceType': 'entertainment',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'Daily Mail',
      'SourceCode': 'daily-mail',
      'SourceType': 'entertainment',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'Entertainment Weekly',
      'SourceCode': 'entertainment-weekly',
      'SourceType': 'entertainment',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'Mashable',
      'SourceCode': 'mashable',
      'SourceType': 'entertainment',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'The Lad Bible',
      'SourceCode': 'the-lad-bible',
      'SourceType': 'entertainment',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    },
  ];
  game_sources = [
    {
      'SourceName': 'IGN',
      'SourceCode': 'ign',
      'SourceType': 'gaming',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'Polygon',
      'SourceCode': 'polygon',
      'SourceType': 'gaming',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    }
  ];
  general_sources = [
    {
      'SourceName': 'ABC News (AU)',
      'SourceCode': 'abc-news-au',
      'SourceType': 'general',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'Al Jazeera English',
      'SourceCode': 'al-jazeera-english',
      'SourceType': 'general',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'Associated Press',
      'SourceCode': 'associated-press',
      'SourceType': 'entertainment',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    }
  ];
  music_sources = [];
  politics_sources = [];
  science_sources = [];
  sport_sources = [];
  technology_sources = [];
  constructor(private _newsService: NewsService) { }
  ngOnInit() {
    console.log('business_articles ', this.business_articles);
    $(document).ready(function() {
      $('select').material_select();
    });
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left', // Displays dropdown with edge aligned to the left of button
        stopPropagation: false // Stops event propagation
      }
    );
    // Loading business data
    this._newsService.LoadBusinessNewsData().subscribe(data => {
      console.log('biz data ', data);
      this.business_articles = data.articles;
      this.IsLoadBusinessFinished = true;
    }, error => {
      this.IsLoadBusinessFinished = true;
    });
    // Loading Entertainment data
    this._newsService.LoadEntertainmentNewsData().subscribe(data => {
      console.log('entermain data ', data);
      this.entertainment_articles = data.articles;
      this.IsLoadEntertainmentFinished = true;
    }, error => {
      this.IsLoadEntertainmentFinished = true;
    });
    // Loading game data
    this._newsService.LoadGamingNewsData().subscribe(data => {
      console.log('game data ', data);
      this.game_articles = data.articles;
      this.IsLoadGameFinished = true;
    }, error => {
      this.IsLoadGameFinished = true;
    });
    // Loading general data
    this._newsService.LoadGeneralNewsData().subscribe(data => {
      console.log('general data ', data);
      this.general_articles = data.general_articles;
      this.IsLoadGeneralFinished = true;
    }, error => {
      this.IsLoadGeneralFinished = true;
    });
    // Loading music data
    this._newsService.LoadMusicNewsData().subscribe(data => {
      console.log('music data ', data);
      this.music_articles = data.general_articles;
      this.IsLoadMusicFinished = true;
    }, error => {
      this.IsLoadMusicFinished = true;
    });
    // Loading politics data
    this._newsService.LoadPoliticsNewsData().subscribe(data => {
      console.log('politics data ', data);
      this.politics_sources = data.general_articles;
      this.IsLoadPoliticsFinished = true;
    }, error => {
      this.IsLoadPoliticsFinished = true;
    });
    // Loading Science data
    this._newsService.LoadScienceNewsData().subscribe(data => {
      console.log('science data ', data);
      this.science_articles = data.general_articles;
      this.IsLoadScienceFinished = true;
    }, error => {
      this.IsLoadScienceFinished = true;
    });

    this._newsService.LoadTechnologyNewsData().subscribe(data => {
      console.log('new serv ', data);
      this.tech_articles = data.articles;
    });


  }

}
