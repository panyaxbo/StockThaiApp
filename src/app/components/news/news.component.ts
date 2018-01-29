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
      'SourceType': 'general',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    }
    ,
    {
      'SourceName': 'BBC News',
      'SourceCode': 'bbc-news',
      'SourceType': 'general',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    }
    ,
    {
      'SourceName': 'CNN',
      'SourceCode': 'cnn',
      'SourceType': 'general',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    }
    ,
    {
      'SourceName': 'Google News',
      'SourceCode': 'google-news',
      'SourceType': 'general',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    }
    ,
    {
      'SourceName': 'Independent',
      'SourceCode': 'independent',
      'SourceType': 'general',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'Metro',
      'SourceCode': 'metro',
      'SourceType': 'general',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'Mirror',
      'SourceCode': 'mirror',
      'SourceType': 'general',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'Newsweek',
      'SourceCode': 'newsweek',
      'SourceType': 'general',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'New York Magazine',
      'SourceCode': 'new-york-magazine',
      'SourceType': 'general',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'Reddit /r/all',
      'SourceCode': 'reddit-r-all',
      'SourceType': 'general',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'Reuters',
      'SourceCode': 'reuters',
      'SourceType': 'general',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'The Guardian (AU)',
      'SourceCode': 'the-guardian-au',
      'SourceType': 'general',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'The Guardian (UK)',
      'SourceCode': 'the-guardian-uk',
      'SourceType': 'general',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'The Hindu',
      'SourceCode': 'the-hindu',
      'SourceType': 'general',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'The Huffington Post',
      'SourceCode': 'the-huffington-post',
      'SourceType': 'general',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'The New York Times',
      'SourceCode': 'the-new-york-times',
      'SourceType': 'general',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'The Telegraph',
      'SourceCode': 'the-telegraph',
      'SourceType': 'general',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'The Times of India',
      'SourceCode': 'the-times-of-india',
      'SourceType': 'general',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'The Washington Post',
      'SourceCode': 'the-washington-post',
      'SourceType': 'general',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'Time',
      'SourceCode': 'time',
      'SourceType': 'general',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    },
    {
      'SourceName': 'USA Today',
      'SourceCode': 'usa-today',
      'SourceType': 'general',
      'SourceImageURL': '',
      'SourceFrom': 'News.io'
    }
  ];
  music_sources = [{
    'SourceName': 'MTV News',
    'SourceCode': 'mtv-news',
    'SourceType': 'music',
    'SourceImageURL': '',
    'SourceFrom': 'News.io'
  },
  {
    'SourceName': 'MTV News (UK)',
    'SourceCode': 'mtv-news-uk',
    'SourceType': 'music',
    'SourceImageURL': '',
    'SourceFrom': 'News.io'
  }];
  politics_sources = [{
    'SourceName': 'Breitbart News',
    'SourceCode': 'breitbart-news',
    'SourceType': 'politics',
    'SourceImageURL': '',
    'SourceFrom': 'News.io'
  }];
  science_sources = [{
    'SourceName': 'National Geographic',
    'SourceCode': 'national-geographic',
    'SourceType': 'science-and-nature',
    'SourceImageURL': '',
    'SourceFrom': 'News.io'
  },
  {
    'SourceName': 'New Scientist',
    'SourceCode': 'new-scientist',
    'SourceType': 'science-and-nature',
    'SourceImageURL': '',
    'SourceFrom': 'News.io'
  }];
  sport_sources = [{
    'SourceName': 'BBC Sport',
    'SourceCode': 'bbc-sport',
    'SourceType': 'sport',
    'SourceImageURL': 'https://icons.better-idea.org/icon?url=http://www.bbc.co.uk/sport&size=70..120..200',
    'SourceFrom': 'News.io'
  }, {
    'SourceName': 'ESPN',
    'SourceCode': 'espn',
    'SourceType': 'sport',
    'SourceImageURL': 'http://a.espncdn.com/wireless/mw5/r1/images/bookmark-icons/espn_icon-152x152.min.png',
    'SourceFrom': 'News.io'
  }, {
    'SourceName': 'ESPN Cric Info',
    'SourceCode': 'espn-cric-info',
    'SourceType': 'sport',
    'SourceImageURL': 'http://a.espncdn.com/wireless/mw5/r1/images/bookmark-icons/espncricinfo_icon-152x152.min.png',
    'SourceFrom': 'News.io'
  }, {
    'SourceName': 'Football Italia',
    'SourceCode': 'football-italia',
    'SourceType': 'sport',
    'SourceImageURL': 'https://icons.better-idea.org/lettericons/F-120-9f0101.png',
    'SourceFrom': 'News.io'
  }, {
    'SourceName': 'FourFourTwo',
    'SourceCode': 'four-four-two',
    'SourceType': 'sport',
    'SourceImageURL': 'https://images.cdn.fourfourtwo.com/sites/fourfourtwo.com/themes/fourfourtwo/images/apple-icon-144x144px.png',
    'SourceFrom': 'News.io'
  }, {
    'SourceName': 'Fox Sports',
    'SourceCode': 'fox-sports',
    'SourceType': 'sport',
    'SourceImageURL': 'https://icons.better-idea.org/lettericons/F-120.png',
    'SourceFrom': 'News.io'
  }, {
    'SourceName': 'NFL News',
    'SourceCode': 'nfl-news',
    'SourceType': 'sport',
    'SourceImageURL': 'https://www.nfl.com/apple-touch-icon.png',
    'SourceFrom': 'News.io'
  }, {
    'SourceName': 'TalkSport',
    'SourceCode': 'talksport',
    'SourceType': 'sport',
    'SourceImageURL': 'https://icons.better-idea.org/lettericons/T-120-fff100.png',
    'SourceFrom': 'News.io'
  }, {
    'SourceName': 'The Sport Bible',
    'SourceCode': 'the-sport-bible',
    'SourceType': 'sport',
    'SourceImageURL': 'http://www.sportbible.com/assets/images/theme/favicons/apple-touch-icon-120x120.png',
    'SourceFrom': 'News.io'
  }];
  technology_sources = [{
    'SourceName': 'Ars Technica',
    'SourceCode': 'ars-technica',
    'SourceType': 'technology',
    'SourceImageURL': 'http://cdn.arstechnica.net/apple-touch-icon.png',
    'SourceFrom': 'News.io'
  }, {
    'SourceName': 'Engadget',
    'SourceCode': 'engadget',
    'SourceType': 'technology',
    'SourceImageURL': 'https://s.blogsmithmedia.com/www.engadget.com/assets-he42a55c94036dabb77c922200f1c3ac3/images/apple-touch-icon-120x120.png?h=232a14b1a350de05a49b584a62abac9e',
    'SourceFrom': 'News.io'
  }, {
    'SourceName': 'Hacker News',
    'SourceCode': 'hacker-news',
    'SourceType': 'technology',
    'SourceImageURL': 'https://news.ycombinator.com/favicon.ico',
    'SourceFrom': 'News.io'
  }, {
    'SourceName': 'Recode',
    'SourceCode': 'recode',
    'SourceType': 'technology',
    'SourceImageURL': 'https://cdn1.vox-cdn.com/uploads/chorus_asset/file/6397047/recode_favicon-180.0.png',
    'SourceFrom': 'News.io'
  }, {
    'SourceName': 'TechCrunch',
    'SourceCode': 'techcrunch',
    'SourceType': 'technology',
    'SourceImageURL': 'https://s0.wp.com/wp-content/themes/vip/techcrunch-2013/assets/images/homescreen_TCIcon_ipad_2x.png',
    'SourceFrom': 'News.io'
  }, {
    'SourceName': 'TechRadar',
    'SourceCode': 'techradar',
    'SourceType': 'technology',
    'SourceImageURL': 'http://cdn0.static.techradar.futurecdn.net/20170927/apple-touch-icon.png',
    'SourceFrom': 'News.io'
  }, {
    'SourceName': 'The Next Web',
    'SourceCode': 'the-next-web',
    'SourceType': 'technology',
    'SourceImageURL': 'https://cdn0.tnwcdn.com/wp-content/themes/cyberdelia/assets/icons/apple-touch-icon-120x120.png?v=1506611853',
    'SourceFrom': 'News.io'
  }, {
    'SourceName': 'The Verge',
    'SourceCode': 'the-verge',
    'SourceType': 'technology',
    'SourceImageURL': 'https://cdn2.vox-cdn.com/uploads/chorus_asset/file/7395359/ios-icon.0.png',
    'SourceFrom': 'News.io'
  }];
  constructor(private _newsService: NewsService) { }
  ngOnInit() {
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
      this.general_articles = data.articles;
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
      this.politics_sources = data.articles;
      this.IsLoadPoliticsFinished = true;
    }, error => {
      this.IsLoadPoliticsFinished = true;
    });
    // Loading Science data
    this._newsService.LoadScienceNewsData().subscribe(data => {
      console.log('science data ', data);
      this.science_articles = data.articles;
      this.IsLoadScienceFinished = true;
    }, error => {
      this.IsLoadScienceFinished = true;
    });
    // Loading Science data
    this._newsService.LoadSportNewsData().subscribe(data => {
      console.log('science data ', data);
      this.sport_articles = data.articles;
      this.IsLoadSportFinished = true;
    }, error => {
      this.IsLoadSportFinished = true;
    });
    // Loading Technology
    this._newsService.LoadTechnologyNewsData().subscribe(data => {
      console.log('new serv ', data);
      this.tech_articles = data.articles;
      this.IsLoadTechnologyFinished = true;
    }, error => {
      this.IsLoadTechnologyFinished = true;
    });


  }

}
