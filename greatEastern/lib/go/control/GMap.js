 enyo.kind({
    name: "go.GMap",
    kind:"Control",
    version: "1.0.0",
    apiVersion:"3.11",
    apiKey:"AIzaSyBqkoW-QNyef_KtS_BPaPSVu_kjaKd2WRE",
    lat:3.8642546157214084,
    lng:108.665771484375,
    center:[],
    markerPosition:[],
    markers:[],
    zoom:4,
    components: [
        {
            name: "map",
            style:"width:100%;height:100%"
        }
    ],
  
    init:function(){
        var self = this;
        this.apiOptions = "key="+this.apiKey+"&sensor=true";
        try{
            google.load("maps", this.apiVersion, {other_params : this.apiOptions,"callback" : handleApiMapReady});
            function handleApiMapReady(){
                self.handleMapsLoaded();
            }
        } catch(e) {
            this.$.map.addClass("networkError");
            console.log("Google API not loading...");
        }
    },
    
    handleMapsLoaded:function() {
        console.log("Map ready... pushing to DOM...");
        if (this.map){
            this.destroyMap();
        }
        var self = this;
        if (google != null){
            try {
                this.center = new google.maps.LatLng(this.lat, this.lng);
                var mapOptions = {
                    center: this.center,
                    zoom: this.zoom,
                    disableDefaultUI: true,
                    modeDiagnostics: false,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };

                if ( this.$.map.hasNode() ){
                    this.infoWindow = new google.maps.InfoWindow({});                            
                    this.map = new google.maps.Map( this.$.map.node , mapOptions );
                    
                    if (this.markerPosition.length){
                        console.log("There's : "+this.markerPosition.length+ " Markers..");
                        for (var i = 0; i < this.markerPosition.length; i++) {
                            var image = new google.maps.MarkerImage("./assets/css/go/img/gMapMarker.png", null, null, null, new google.maps.Size(20,34));
                            this.markers[i] = new google.maps.Marker({
                                position: new google.maps.LatLng(this.markerPosition[i].lat, this.markerPosition[i].lng),
                                icon:image,
                                draggable: false,
                                map: this.map,
                                title:this.markerPosition[i].name,
                                htmlTxt:this.markerPosition[i].html
                            }); 
         
                            this.markers[i].setMap(this.map);
                            console.log(this.markerPosition[i]);
                            google.maps.event.addListener(this.markers[i], 'click', function(event) {
                                self.map.panTo(this.position);
                                self.map.setZoom(12);
                                var htmlContent = "<strong>"+this.title+"</strong><br><small>"+this.htmlTxt+"</small>";
                                self.infoWindow.setContent(htmlContent);
                                self.infoWindow.open(this.map,this);
                            });
                        }
                       
                    }
                }
            } catch(e) {
                console.log(e.message);
            }
            
        }
    },
    setItem:function(array){
        if (array != null){
             this.markerPosition = array;
        }
    },
    setCenter:function(position){
        if(position != null){
            console.log("Centering map...");
            this.center.hb = position.lat;
            this.center.ib = position.lng;
            this.map.panTo(this.center);
        } else {
            console.log("Parameter lat, lng missing...");
        }
    },
    
   destroyMap:function(){
        console.log('Clearing map from memory');
        if (this.markers != null){
            google.maps.event.clearInstanceListeners(this.markers);
            this.markers = [];
        }
        
        this.map = null;
        this.gmap = null;
    }
});