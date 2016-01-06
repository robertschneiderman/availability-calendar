<!DOCTYPE html>
<html lang="en" ng-app="calendarApp">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description">
    <meta name="author">

    <title>Calendar App</title>

<?php include 'include/header.html' ?>
<!-- build:section optional layout.header -->
<!-- /build -->   


    <div class="container">
        <div class="heading">
            <h1 class="heading__main">Availability Calendar App</h1>
            <h2 class="heading__sub">By Robert Schneiderman</h2>
        </div>
    </div>

	<div class="app">
        <table class="calendar" ng-controller="weekCtrl">
            <thead>
                <tr>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                </tr>
            </thead>
            <tbody>
                <tr class="week"
                    ng-repeat="week in weeks">
                    <!-- <td>{{ week.days[0].number }}</td> -->
                
                    <td class="day" align="right"
                            ng-repeat="day in week"
                            ng-click="selectDay(day)"
                            ng-style="{ 
                                'box-shadow' : weekService.selectedDay == day.moment ? 'inset 0 0 0 1px #333' : 'none',
                                'opacity' : day.isActive ? '1' : '.4' }">
                            <span>{{ day.moment.date() }}</span>   
                    </td>
                </tr>
            </tbody>
        </table>
        
        <div class="panel" ng-controller="timeCtrl">
            <a class="time" 
                ng-repeat="timeObj in timeObjs"
                ng-click="timeObj.isActive = true"
                ng-class="{ 'is-active' : timeObj.isActive}"
                >
                <span class="time__text">{{ timeObj.time._d | date : 'h:mm a' }}</span>
            </a>
            <!-- ng-show="selectedDay._d === timeObj.time._d" -->
        </div>
    </div>




<?php include 'include/footer.html' ?>
<!-- build:section optional layout.footer -->
<!-- /build --> 

</body>
</html>