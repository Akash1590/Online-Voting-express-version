var db = require('./db');

module.exports = {
	validate: function(user, callback){
		var sql = "SELECT * FROM `person` WHERE NID=? AND password=?";
		db.getResult(sql, [user.username, user.password], function(result){
			if(result.length > 0)
			{
				callback(result);
			}
			else
			{
				callback(result);
			}
		});
	},
	getpersonbyid: function(catid, callback){
		var sql = "SELECT * FROM `person` WHERE NID=? ";
		db.getResult(sql, catid, function(result){
			if(result.length > 0)
			{
				callback(result);
			}
			else
			{
				callback(result);
			}
		});
	},
	getallvoter : function(callback)
	{
		var sql="SELECT * FROM `person` WHERE `persontypeid`=2";
		db.getResult(sql,null,function(result)
		{
			callback(result);

		});
	},
	getallparticipant : function(callback)
	{
		var sql="SELECT * FROM `person` WHERE `persontypeid`=3";
		db.getResult(sql,null,function(result)
		{
			callback(result);

		});
	},
	getalladmin : function(callback)
	{
		var sql="SELECT * FROM `person` WHERE `persontypeid`=1";
		db.getResult(sql,null,function(result)
		{
			callback(result);

		});
	},
	getallbyid : function(catid,callback)
	{
		var sql="SELECT * FROM person p, persontype t WHERE p.persontypeid=t.persontypeid AND `NID`=?";
		db.getResult(sql,[catid],function(result)
		{
			callback(result[0]);

		});
	},
	updateasadmin: function(catid, callback){
		var sql = "UPDATE `person` SET `persontypeid`='1' WHERE `NID`=?";
		db.execute(sql, [catid], function(flag){
			callback(flag);
		});
	},
	updateasavoter: function(catid, callback){
		var sql = "UPDATE `person` SET `persontypeid`='2' WHERE `NID`=?";
		db.execute(sql, [catid], function(flag){
			callback(flag);
		});
	},
	Deletevoter: function(catid, callback){
		var sql = "DELETE FROM `person` WHERE `NID`=?";
		db.execute(sql, [catid], function(flag){
			callback(flag);
		});
	},
	updateascandidate: function(catid, callback){
		var sql = "UPDATE `person` SET `persontypeid`='3' WHERE `NID`=?";
		db.execute(sql, [catid], function(flag){
			callback(flag);
		});
	},

	insert:function(user,callback)
	{

		var sql="INSERT INTO `person`(`Name`, `NID`, `Dateofbirth`, `Address`, `Phoneno`, `persontypeid`, `email`, `password`) VALUES (?,?,?,?,?,?,?,?)";
		db.executeGetId(sql,[user.Name,user.NID,user.date,user.Address,user.phoneno,user.type,user.email,user.Password],function(flag)
		{
			callback(flag);
		});
	},
	update:function(user,callback)
	{

		var sql="UPDATE `person` SET `Address`=?,`Phoneno`=?,`email`=?,`password`=? WHERE `NID`=?";
		db.executeGetId(sql,[user.Address,user.phoneno,user.email,user.Password,user.NID],function(flag)
		{
			callback(flag);
		});
	}

};
