db.voos.countDocuments({ "aeroportoOrigem.pais": { $nin: ["BRASIL"] } });
