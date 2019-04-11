var camera, scene, renderer;

var scene2, renderer2;

init();
animate();

function init() {

	var frustumSize = 500;
	var aspect = window.innerWidth / window.innerHeight;
	camera = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 1, 2000 );

	camera.position.set( 200, 200, 200 );

	var controls = new THREE.OrbitControls( camera );
	controls.update();

	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xf0f0f0 );

	scene2 = new THREE.Scene();

	var material = new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: true, wireframeLinewidth: 1, side: THREE.DoubleSide } );

	const mainPlaceWidth = 1000;
	const mainPlaceLong = 1000;
	//base place
	createPlane(
		mainPlaceWidth, mainPlaceLong,
		'seagreen',
		new THREE.Vector3( 0, 0, 0 ),
		new THREE.Euler( - 90 * THREE.Math.DEG2RAD, 0, 0 ),
		'https://thumbs.dreamstime.com/z/%D0%BF%D0%BB%D0%B0%D0%BD-%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%B0-%D0%BE%D1%82-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D0%B2%D0%B7%D0%B3%D0%BB%D1%8F%D0%B4-%D1%81%D0%B2%D0%B5%D1%80%D1%85%D1%83-116824875.jpg',
		1
	);

	createPlane(
		mainPlaceWidth, mainPlaceLong,
		'#000',
		new THREE.Vector3( 0, - 1, 0 ),
		new THREE.Euler( - 90 * THREE.Math.DEG2RAD, 0, 0 ),
		null,
		1
	);

	const createBox = ( width, long, height, x, y, z ) => {

		//top
		createPlane(
			long, width,
			'#000',
			new THREE.Vector3( ( mainPlaceWidth / 2 ) - ( long / 2 ) - x, height + y, ( mainPlaceLong / 2 ) - ( width / 2 ) - z ),
			new THREE.Euler( - 90 * THREE.Math.DEG2RAD, 0, 0 )
		);

		//bottom
		createPlane(
			long, width,
			'#000',
			new THREE.Vector3( ( mainPlaceWidth / 2 ) - ( long / 2 ) - x, y, ( mainPlaceLong / 2 ) - ( width / 2 ) - z ),
			new THREE.Euler( - 90 * THREE.Math.DEG2RAD, 0, 0 )
		);

		//front
		createPlane(
			width, height,
			'#00ff00',
			new THREE.Vector3( ( mainPlaceWidth / 2 ) - x, height / 2 + y, ( mainPlaceLong / 2 ) - ( width / 2 ) - z ),
			// new THREE.Vector3( long / 2 + x, height / 2 + y, z ),
			new THREE.Euler( 0, 90 * THREE.Math.DEG2RAD, 0 )
		);

		//back
		createPlane(
			width, height,
			'#00ff',
			new THREE.Vector3( ( mainPlaceWidth / 2 ) - long - x, height / 2 + y, ( mainPlaceLong / 2 ) - ( width / 2 ) - z ),
			new THREE.Euler( 0, - 90 * THREE.Math.DEG2RAD, 0 )
		);

		//left
		createPlane(
			long, height,
			'#fff',
			// new THREE.Vector3( x, height / 2 + y, - width / 2 + z ),
			new THREE.Vector3( ( mainPlaceWidth / 2 ) - long / 2 - x, height / 2 + y, ( mainPlaceLong / 2 ) - width - z ),
			new THREE.Euler( 0, 180 * THREE.Math.DEG2RAD, 0 )
		);
		//right
		createPlane(
			long, height,
			'#ff0',
			new THREE.Vector3( ( mainPlaceWidth / 2 ) - long / 2 - x, height / 2 + y, ( mainPlaceLong / 2 ) - z ),
			new THREE.Euler( 0, 0, 0 )
		);

	};

	createBox( 50, 200, 50, 0, 0, 0 );
	createBox( 50, 200, 50, 0, 50, 0 );
	createBox( 50, 200, 50, 0, 0, 150 );
	createBox( 50, 200, 50, 0, 50, 150 );
	createBox( 50, 200, 50, 0, 0, 300 );
	createBox( 50, 200, 50, 0, 50, 300 );
	createBox( 50, 200, 50, 300, 0, 0 );
	createBox( 50, 200, 50, 300, 50, 0 );
	createBox( 50, 200, 50, 300, 0, 150 );
	createBox( 50, 200, 50, 300, 50, 150 );
	createBox( 50, 200, 50, 300, 0, 300 );
	createBox( 50, 200, 50, 300, 50, 300 );




	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	renderer2 = new THREE.CSS3DRenderer();
	renderer2.setSize( window.innerWidth, window.innerHeight );
	renderer2.domElement.style.position = 'absolute';
	renderer2.domElement.style.top = 0;
	document.body.appendChild( renderer2.domElement );

	function createPlane( width, height, cssColor, pos, rot, bg, opacity ) {

		var element = document.createElement( 'div' );
		element.innerHTML = 'TEXT';
		element.style.width = width + 'px';
		element.style.height = height + 'px';
		element.style.opacity = opacity || 0.75;
		element.style.background = cssColor;
		element.style.backgroundImage = `url(${bg})`;
		element.style.border = '1px solid #000';
		element.style.transform = 'rotate(90deg)';

		element.addEventListener('click', (({ target }) => {
			console.log( target.innerHTML );
		}));

		var object = new THREE.CSS3DObject( element );
		object.position.copy( pos );
		object.rotation.copy( rot );
		scene2.add( object );

		var geometry = new THREE.PlaneBufferGeometry( width, height );
		var mesh = new THREE.Mesh( geometry, material );
		mesh.position.copy( object.position );
		mesh.rotation.copy( object.rotation );
		scene.add( mesh );

	}

}

function animate() {

	requestAnimationFrame( animate );

	renderer.render( scene, camera );
	renderer2.render( scene2, camera );

}
