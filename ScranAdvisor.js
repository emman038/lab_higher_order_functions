const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

ScranAdvisor.prototype.countRestaurants = function (){
    return this.restaurants.length;
};

ScranAdvisor.prototype.findRestaurantByName = function (restaurantName){
    return this.restaurants.find((restaurant) => { return restaurant.name == restaurantName});
};

ScranAdvisor.prototype.findAllRestaurantNames = function (){
    return this.restaurants.map((restaurant)=>{return restaurant.name});
};

ScranAdvisor.prototype.findAllByLocation = function (townName){
    return this.restaurants.filter((restaurant)=>{return restaurant.location.town === townName})
}


module.exports = ScranAdvisor;