import { Component } from '@angular/core';
import { Sidebar } from '../../shared/components/layouts/sidebar/sidebar';
import { Topbar } from '../../shared/components/layouts/topbar/topbar';
import { ComponentCard } from "./component-card/component-card";

@Component({
  selector: 'app-home-component',
  imports: [Sidebar, Topbar, ComponentCard],
  standalone: true,
  templateUrl: './home-component.html',
  styleUrls: ['./home-component.css']
})
export class HomeComponent {
  cards:any[]=[{title:'Todays Money',miktar:'$53k' , oran:'+55%' , zaman:' than last week' , ikon:'assets/icons/money-integral-line-svgrepo-com.svg' },
               {title:'Todays Users', miktar:'2300', oran:'+3%' , zaman:' than last month' , ikon:'assets/icons/profile-circle-svgrepo-com.svg'},
               {title:'Ads Views' , miktar:'3,462' , oran:'-2%' , zaman:' than yesterday' , ikon : 'assets/icons/graphic-svgrepo-com.svg'},
               {title:'Sales' , miktar:'$103,430' , oran:'+5%' , zaman:' than yesterday' , ikon : 'assets/icons/money-integral-line-svgrepo-com.svg'}
              ];

              onCardClicked(cardTitle: string) {
                console.log('🎯 Parent component\'te yakalandı:', cardTitle);
              }

              onAllCardsButtonClick() {
                console.log('🚀 TÜM CARD\'LARIN DETAYLARI GÖRÜNTÜLENİYOR...');
                console.log('📊 Toplam card sayısı:', this.cards.length);
                this.cards.forEach((card, index) => {
                  console.log(`📋 Card ${index + 1}: ${card.title} - ${card.miktar}`);
                });
              }
}
