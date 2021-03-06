import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Locations } from '../../providers/locations';

import { MapPage } from '../map/map';

@Component({
	selector: 'page-search',
	templateUrl: 'search.html',
})
export class SearchPage {

	address: string;

	constructor(
		public navCtrl: NavController,
		public loadingCtrl: LoadingController,
		public locations: Locations
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad SearchPage');
	}

	searchAddr() {
		let addr = this.address.split(' ').join('+');
		let loading = this.loadingCtrl.create({
			content: "Đang tìm kiếm ..."
			// duration: 500
		});
		loading.present();
		this.locations.search(addr).then(() => {
			loading.dismiss();
		}, () => {
			loading.dismiss();			
		});
	}

	selectAddress(location) {
		console.log(location);
		this.navCtrl.push(MapPage, { location: location });
	}

	showAll(locations) {
		this.navCtrl.push(MapPage, { locations: locations });
	}
}
