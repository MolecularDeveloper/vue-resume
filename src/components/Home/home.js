import Vue from 'vue';
import template from './home.html';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {'Content-Type': 'jsonp'},
  userAgent: 'MolecularDeveloper'
});

export default Vue.extend({
  template,
  data: function() {
    return {
      messages: 1,
      imgSrc: '',
      username: '',
      repos: 0,
      name: '',
      location: '',
      profileLink: '',
      search: ''
    }
  },
  methods: {
    add(){
      this.messages++;
    return;
    },
    subtract() {
      this.messages--;
      return;
    },
    getData(){
      instance.get('users/'+this.search)
      .then(function (response) {
        const avatar = response.data.avatar_url;
        const username = response.data.login;
        const repos = response.data.public_repos;
        const profileLink = response.data.html_url;
        const name = response.data.name;
        const location = response.data.location;
        this.profileLink = profileLink;
        this.name = name;
        this.location = location;
        this.imgSrc = avatar;
        this.username = username;
        this.repos = repos;
        return;
      }.bind(this))
      .catch(function (e) {
        console.log(e);
      }.bind(this))
    },
    clearSearch() {
      this.profileLink = '';
      this.name = '';
      this.location = '';
      this.imgSrc = '';
      this.username = '';
      this.repos = 0;
      this.search = '';
      return;
    }
  }
});