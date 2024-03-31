import { Component, Input, OnInit } from '@angular/core';

interface Message {
  content: string;
  isUserMessage: boolean;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  @Input() title = 'Chat';
  @Input() avatarSrc = 'assets/user-circle-svgrepo-com.svg';
  @Input() avatarAlt = 'User Avatar';

  messages: Message[] = [];
  userInput = '';

  ngOnInit() {
    // Add any initial messages here
  }

  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push({ content: this.userInput, isUserMessage: true });
      // Call your AI assistant service here to get the response
      this.userInput = '';
    }
  }
}
