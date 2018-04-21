var db = require('./db');


module.exports={


	getallcandidatebyvoteid : function(catid,callback)
	{
		var sql="SELECT * FROM candidate c,person p WHERE c.NID=p.NID AND voteid=?";
		db.getResult(sql,[catid],function(result)
		{
			callback(result);

		});
	},
	getallcandidatejoin:function(cat,callback)
	{
		
		var sql="SELECT * FROM candidate c,person p,vote v WHERE c.NID=p.NID AND c.voteid=v.Voteid AND totalvote=? AND v.votetopic=?";
		db.getResult(sql,[cat.totalVote,cat.voteTopic],function(result)
		{
			callback(result);
		});

	},
	getcandidatebyid:function(catid,callback)
	{
		var sql="SELECT * FROM `candidate` WHERE `NID`=?";
		db.getResult(sql,catid,function(result)
		{
			callback(result);
		});

	},
	updatecandidatetotalvotebyid:function(cat,callback)
	{
		var sql="UPDATE `candidate` SET `totalvote`=? WHERE `NID`=?";
		db.execute(sql,[cat.Totalvote,cat.NID],function(flag)
		{
			callback(flag);
		});
	},
	insert:function(cat,callback)
	{
		var sql="INSERT INTO `candidate`(`NID`, `voteid`, `totalvote`) VALUES (?,?,?)";
		db.executeGetId(sql,[cat.NID,cat.Voteid,cat.total],function(flag)
		{
			callback(flag);
		});
	},

};