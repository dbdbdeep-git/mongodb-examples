db.createUser(
	{
		user : "test",
		pwd	: "pass",
		roles : [
			{
				role : "readWrite",
				db	: "testdb"
			}
		]
	}
)
