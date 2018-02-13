 /**
  * Created by MatildaJin
  * 2018/01/24
  * @Shanghai
  */
 
        function randomsort(a, b) {
			return Math.random() > .5 ? -1 : 1;
		}

		function GrannyKnot(scale) {

			THREE.Curve.call( this );

			this.scale = (scale === undefined) ? 10 : scale;

		}

		GrannyKnot.prototype = Object.create( THREE.Curve.prototype );
		GrannyKnot.prototype.constructor = GrannyKnot;

		GrannyKnot.prototype.getPoint = function ( t, optionalTarget ) {

			var point = optionalTarget || new THREE.Vector3();

			t = 2 * Math.PI * t;

			var x = - 0.22 * Math.cos( t ) - 1.28 * Math.sin( t ) - 0.44 * Math.cos( 3 * t ) - 0.78 * Math.sin( 3 * t );
			var y = - 0.1 * Math.cos( 2 * t ) - 0.27 * Math.sin( 2 * t ) + 0.38 * Math.cos( 4 * t ) + 0.46 * Math.sin( 4 * t );
			var z = 0.7 * Math.cos( 3 * t ) - 0.4 * Math.sin( 3 * t );

			return point.set( x, y, z ).multiplyScalar( this.scale );

		};

		function CinquefoilKnot(scale) {

			THREE.Curve.call(this);

			this.scale = (scale === undefined) ? 10 : scale;

		}

		CinquefoilKnot.prototype = Object.create(THREE.Curve.prototype);
		CinquefoilKnot.prototype.constructor = CinquefoilKnot;
		CinquefoilKnot.prototype.getPoint = function (t, optionalTarget) {

			var point = optionalTarget || new THREE.Vector3();

			var p = 2;
			var q = 5;

			t *= Math.PI * 2;

			var x = (2 + Math.cos(q * t)) * Math.cos(p * t);
			var y = (2 + Math.cos(q * t)) * Math.sin(p * t);
			var z = Math.sin(q * t);

			return point.set(x, y, z).multiplyScalar(this.scale);

		};

		function KnotCurve(scale) {

			THREE.Curve.call( this );

			this.scale = (scale === undefined) ? 10 : scale;

		}

		KnotCurve.prototype = Object.create( THREE.Curve.prototype );
		KnotCurve.prototype.constructor = KnotCurve;

		KnotCurve.prototype.getPoint = function ( t, optionalTarget ) {

			var point = optionalTarget || new THREE.Vector3();

			t *= 2 * Math.PI;

			var R = 10;
			var s = 50;

			var x = s * Math.sin( t );
			var y = Math.cos( t ) * ( R + s * Math.cos( t ) );
			var z = Math.sin( t ) * ( R + s * Math.cos( t ) );

			return point.set( x, y, z ).multiplyScalar(this.scale);

		};

		function TrefoilKnot( scale ) {

			THREE.Curve.call( this );

			this.scale = ( scale === undefined ) ? 10 : scale;

		}

		TrefoilKnot.prototype = Object.create( THREE.Curve.prototype );
		TrefoilKnot.prototype.constructor = TrefoilKnot;

		TrefoilKnot.prototype.getPoint = function ( t, optionalTarget ) {

			var point = optionalTarget || new THREE.Vector3();

			t *= Math.PI * 2;

			var x = ( 2 + Math.cos( 3 * t ) ) * Math.cos( 2 * t );
			var y = ( 2 + Math.cos( 3 * t ) ) * Math.sin( 2 * t );
			var z = Math.sin( 3 * t );

			return point.set( x, y, z ).multiplyScalar( this.scale );

		};