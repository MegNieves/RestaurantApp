ngular.module('homeController', [])
    .controller('homeCtrl', homeCtrl)
    
    function homeCtrl(foodFact){
        var hCtrl = this
        hCtrl.name ='something'
        
        hCtrl.submitPlate = function(plate){
            foodFact.create(plate)
            .then(function(response){
                console.log('response from server create method', response)
            })
        }
    }