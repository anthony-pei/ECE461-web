'use strict';


/**
 *
 * body AuthenticationRequest 
 * returns AuthenticationToken
 **/
exports.createAuthToken = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete all versions of this package.
 *
 * name PackageName 
 * xAuthorization AuthenticationToken  (optional)
 * no response value expected for this operation
 **/
exports.packageByNameDelete = function(name,xAuthorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Return the history of this package (all versions).
 *
 * name PackageName 
 * xAuthorization AuthenticationToken  (optional)
 * returns List
 **/
exports.packageByNameGet = function(name,xAuthorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "Action" : "CREATE",
  "User" : {
    "name" : "Alfalfa",
    "isAdmin" : true
  },
  "PackageMetadata" : {
    "Version" : "1.2.3",
    "ID" : "ID",
    "Name" : "Name"
  },
  "Date" : "2000-01-23T04:56:07.000+00:00"
}, {
  "Action" : "CREATE",
  "User" : {
    "name" : "Alfalfa",
    "isAdmin" : true
  },
  "PackageMetadata" : {
    "Version" : "1.2.3",
    "ID" : "ID",
    "Name" : "Name"
  },
  "Date" : "2000-01-23T04:56:07.000+00:00"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body Package 
 * xAuthorization AuthenticationToken 
 * returns PackageMetadata
 **/
exports.packageCreate = function(body,xAuthorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Version" : "1.2.3",
  "ID" : "ID",
  "Name" : "Name"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete this version of the package.
 *
 * id PackageID Package ID
 * xAuthorization AuthenticationToken  (optional)
 * no response value expected for this operation
 **/
exports.packageDelete = function(id,xAuthorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * id PackageID 
 * xAuthorization AuthenticationToken  (optional)
 * returns PackageRating
 **/
exports.packageRate = function(id,xAuthorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "GoodPinningPractice" : 2.3021358869347655,
  "ResponsiveMaintainer" : 5.962133916683182,
  "LicenseScore" : 5.637376656633329,
  "RampUp" : 1.4658129805029452,
  "BusFactor" : 0.8008281904610115,
  "Correctness" : 6.027456183070403
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Return this package.
 *
 * id PackageID ID of package to fetch
 * xAuthorization AuthenticationToken  (optional)
 * returns Package
 **/
exports.packageRetrieve = function(id,xAuthorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "metadata" : {
    "Version" : "1.2.3",
    "ID" : "ID",
    "Name" : "Name"
  },
  "data" : {
    "Content" : "Content",
    "JSProgram" : "JSProgram",
    "URL" : "URL"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update this version of the package.
 * The name, version, and ID must match.  The package contents (from PackageData) will replace the previous contents.
 *
 * body Package 
 * id PackageID 
 * xAuthorization AuthenticationToken  (optional)
 * no response value expected for this operation
 **/
exports.packageUpdate = function(body,id,xAuthorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get packages
 * Get any packages fitting the query.
 *
 * body List 
 * offset EnumerateOffset Provide this for pagination. If not provided, returns the first page of results. (optional)
 * xAuthorization AuthenticationToken  (optional)
 * returns List
 **/
exports.packagesList = function(body,offset,xAuthorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "Version" : "1.2.3",
  "ID" : "ID",
  "Name" : "Name"
}, {
  "Version" : "1.2.3",
  "ID" : "ID",
  "Name" : "Name"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * xAuthorization AuthenticationToken  (optional)
 * no response value expected for this operation
 **/
exports.registryReset = function(xAuthorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

