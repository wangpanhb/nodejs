/**
 * Created by wang on 2016/5/17.
 */
var userInfoModule=angular.module('UserInfoModule',[]);
userInfoModule.controller('UserInfoCtrl',['$scope',function($scope){
    $scope.userInfo={
        email:"45646464@qq.com",
        password:"2564687987",
        autoLogin:true
    };
    $scope.getFormData=function(){
        console.log($scope.userInfo);
    };
    $scope.setFormData=function(){
        $scope.userInfo={
            email:'damoqiodfalkj@126.com',
            password:'dafasdfmal',
            autoLogin:false
        }
    };
}])