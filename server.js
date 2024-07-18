		const eXPReSS	 = require	 ("express"	)	;

		const conneCTDb	= require ("./config/db"	 )	;
 const paTh	= require	 ("path"  ) ;

 const APp		= eXPReSS		(	)	;

	// Connect Database
	conneCTDb		( )		;

	 // Init Middleware
	APp  .use  (eXPReSS	.json  ({ extended  : false		} )		)  ;

 // app.get("/", (req, res) =>
		//   res.json({ msg: "Welcome to the ContactKeeper API!" })
		// );

  // Define Routes
  APp	 .use		("/api/users"  , require	("./routes/users" )  ) ;
	 APp  .use ("/api/auth"	 , require	 ("./routes/auth" )	)	 ;
  APp .use  ("/api/contacts"	, require ("./routes/contacts"	)  )  ;

	// Serve static assets (react) in production
 if		(process  .env	 .NODE_ENV	=== "production"  ) {
	 // Set static folder
  APp .use (eXPReSS  .static	("client/build"		)	 )  ;

	APp .get  ("*"		,		(req , res )  =>
		res .sendFile	 (paTh		.resolve (__dirname  , "client"  , "build"	, "index.html"	)	)	)		;	 }

	 const PoRt  = process	.env		.PoRt	 || 5000  ;

		APp	.listen		(PoRt ,		( )		=> console	 .log		(`Server started on port ${PoRt  }`		) )		;
