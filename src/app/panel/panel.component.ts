import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  constructor(private Auth: AuthService, private Route: Router, public User: UserService) { }

  ngOnInit() {
    $("#sidebar").mCustomScrollbar({
      theme: "minimal"
    });

    $('.count').each(function () {
      var $this = $(this);
      jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
        duration: 500,
        easing: 'swing',
        step: function () {
          $this.text(Math.ceil(this.Counter));
        }
      });
    });

    setInterval(() => {
      $('.count').each(function () {
        var $this = $(this);
        $this.data('last_number', $this.text());
        let random = Math.floor((Math.random() * 5) + 1);
        random *= Math.random() <= 0.5 ? 1 : -1;
        $this.data('new_number', parseInt($this.text()) + random);
      });
      $('.count').each(function () {
        var $this = $(this);
        jQuery({ Counter: $this.data().last_number }).animate({ Counter: $this.data().new_number }, {
          duration: 500,
          easing: 'swing',
          step: function () {
            $this.text(Math.ceil(this.Counter));
          }
        });
      });
    }, 2500);

    this.Auth.loginWithSession().subscribe(data => {
      if (data.success) {
        this.User.loginUser(data.user_id, data.username, data.email);
      }
    });
  }

  logout() {
    this.User.logoutUser();
    this.Auth.logout();
    this.Route.navigate(['/']);
  }

}
