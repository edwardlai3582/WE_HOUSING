app.controller('listController', ['$scope', 'apartmentData', function($scope, apartmentData) {
    $scope.searchTerm = apartmentData.data.searchTerm;
    $scope.apartments = apartmentData.data.apartments.sort(function(a, b) {
        if (a.name < b.name){
            return -1;    
        }
        else if (a.name > b.name){
            return 1;    
        }
        else{
            return 0;    
        }     
    });
    $scope.currentPage = 0;
    $scope.pageSize = 5;
    $scope.numberOfPages = function(){
        return Math.ceil($scope.apartments.length/$scope.pageSize);                
    }
    //SORT RELATED
    $scope.sortingOrder = 'popularity';
    $scope.reverse = true;
    $scope.sort_by = function(newSortingOrder) {
        if ($scope.sortingOrder == newSortingOrder){
            $scope.reverse = !$scope.reverse;    
        }
        else{
            $scope.sortingOrder = newSortingOrder;
            $scope.reverse = true;
        }
        $scope.currentPage = 0;
    }


    
}]);