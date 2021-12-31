angular.module('foodfactory',[])
    .factory('foodFact', foodFact)
    
    function foodFact($http){
        var fFactory={}
        
        fFactory.create = function(plate){
            return $http.post('/api/plates', plate)
        }
        return fFactory
    }