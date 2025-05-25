import React from 'react'
import './Sports.css'
const Sports = () => {
  return (
    <div>
      <div class="table-container">
    <table>
        <caption>Sports</caption>
        <thead>
            <tr>
                <th>#</th>
                <th>Sports</th>
                <th>Why It's Important</th>
                <th>Steps to Be Active</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Travel the World</td>
                <td>Explore different cultures and gain new perspectives.</td>
                <td>Save money, plan trips, and learn about new destinations.</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Write a Book</td>
                <td>Share knowledge and inspire others.</td>
                <td>Draft ideas, write regularly, and find a publisher.</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Start a Business</td>
                <td>Achieve financial independence and create value.</td>
                <td>Research markets, create a plan, and secure funding.</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Learn Multiple Languages</td>
                <td>Improve communication and connect globally.</td>
                <td>Take online courses, practice daily, and interact with native speakers.</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Give Back to the Community</td>
                <td>Make a positive impact on others' lives.</td>
                <td>Volunteer, donate, and start local initiatives.</td>
            </tr>
        </tbody>
    </table>
</div>
    </div>
  )
}

export default Sports
