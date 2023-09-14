import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() rating: number = 5;
  // Find al rating items

  ngOnInit(): void {
    
  }

setRating(){
  const ratings = document.querySelectorAll(".rating");
  ratings.forEach((rating) => {
    // Get content and get score as an int
    const ratingContent = rating.innerHTML;
    const ratingScore = this.rating;
  
    // Define if the score is good, meh or bad according to its value
    const scoreClass =
      ratingScore < 40 ? "bad" : ratingScore < 60 ? "meh" : "good";
  
    // Add score class to the rating
    rating.classList.add(scoreClass);
  
    // After adding the class, get its color
    const ratingColor = window.getComputedStyle(rating).backgroundColor;
  
    // Define the background gradient according to the score and color
    const gradient = `background: conic-gradient(${ratingColor} ${ratingScore}%, transparent 0 100%)`;
  
    // Set the gradient as the rating background
    rating.setAttribute("style", gradient);
  
    // Wrap the content in a tag to show it above the pseudo element that masks the bar
    rating.innerHTML = `<span>${ratingScore} ${
      ratingContent.indexOf("%") >= 0 ? "<small>%</small>" : ""
    }</span>`;
  });
}

// Iterate over all rating items


}
