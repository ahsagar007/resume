﻿using Resume.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Resume.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult Contact()
        {
            return View();
        }
        public ActionResult Skills()
        {
            return View();
        }
        
        [HttpPost]
        public JsonResult ConcactInfoPost(List<ComtactInfo> obj)
        {
            //List<ComtactInfo>
            return Json(obj, JsonRequestBehavior.AllowGet);
        }
    }
}