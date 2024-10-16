import { Component, OnInit } from '@angular/core';
import { QuizService } from "../../shared/services/quiz.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  quizContent: any[] = this.quizService.quizContent;

  constructor(private quizService: QuizService,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
      this.quizService.getQuizContent();
     
  }
}
