var db = require('./db');


module.exports={


	getallvote : function(callback)
	{
		var sql="SELECT * FROM `vote` ";
		db.getResult(sql,null,function(result)
		{
			callback(result);

		});
	},
	getallvotebyid:function(catid,callback)
	{
		var sql="SELECT * FROM `vote` WHERE `Voteid`=?";
		db.getResult(sql,catid,function(result)
		{
			callback(result);
		});
	},
	startvote: function(catid, callback){
		var sql = "UPDATE `vote` SET `votestatus`='start' WHERE `Voteid`=?";
		db.execute(sql, [catid], function(flag){
			callback(flag);
		});
	},
	endvote: function(catid, callback){
		var sql = "UPDATE `vote` SET `votestatus`='not started' WHERE `Voteid`=?";
		db.execute(sql, [catid], function(flag){
			callback(flag);
		});
	},
	checkvotestatus:function(cat,callback)
	{
		var sql="SELECT * FROM `votestatus` WHERE `NIDv`=? AND `voteidV`=?";
		db.getResult(sql,[cat.NID,cat.voteid],function(result)
		{
			callback(result);
		});

	},
	getcandidatenames:function(cat,callback)
	{
		var sql="SELECT * FROM candidate c,person p WHERE c.NID= p.NID AND voteid=?";
		db.getResult(sql,cat.voteid,function(result)
		{
			callback(result);
		});

	},
	getVotetitle:function(catid,callback)
	{
		var sql="SELECT * FROM `vote` WHERE `Voteid`=?";
		db.getResult(sql,catid,function(result)
		{
			callback(result);
		});

	},
	votestatusinsert:function(cat,callback)
	{
		var sql="INSERT INTO `votestatus`(`NIDv`, `voteidV`) VALUES (?,?)";
		db.executeGetId(sql,[cat.Name,cat.Voteid],function(flag)
		{
			callback(flag);

		});
	},
	updatetotalvotebyid:function(cat,callback)
	{

		
		var sql="UPDATE `vote` SET `totalvotes`=? WHERE `Voteid`=?";
		db.execute(sql,[cat.Vote,cat.Voteid],function(flag)
		{
			callback(flag);
		});
	},
	insert:function(user,callback)
	{
		var sql="INSERT INTO `vote`(`Voteid`, `votetopic`, `votestatus`, `totalvotes`) VALUES (?,?,?,?)";
		db.executeGetId(sql,[user.Voterid,user.Title,user.status,user.totalvote],function(flag)
		{
			callback(flag);
		});
	}


};