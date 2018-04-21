var db = require('./db');


module.exports={


	getallapproval:function(callback)
	{
		var sql="SELECT * FROM `approval` ";
		db.getResult(sql,null,function(result)
		{
			callback(result);

		});
	},
	deleteapproval:function(cat,callback)
	{
		var sql="DELETE FROM `approval` WHERE `Approved_nid`=? AND `Approved_voteid`=?";
		db.execute(sql,[cat.NID,cat.Voteid],function(flag)
		{
			callback(flag);
		});

	},
	insert:function(cat,callback)
	{
		
		var sql="INSERT INTO `approval`(`Approved_nid`, `Approved_voteid`) VALUES (?,?)";
		db.executeGetId(sql,[cat.NID,cat.voteid],function(flag)
		{
			callback(flag);
		});
	}

};